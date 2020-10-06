const { src, dest, task, series, watch, parallel } = require('gulp');
const rm = require('gulp-rm');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const px2rem = require('gulp-smile-px2rem');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const svgo = require('gulp-svgo');
const svgSprite = require('gulp-svg-sprite');
const gulpif = require('gulp-if');
const env = process.env.NODE_ENV;
const { DIST_PATH, SRC_PATH, STYLES_LIBS, JS_LIBS } = require('./gulp.config');

sass.compiler = require('node-sass');

task('clean', () => {
    return src(`${DIST_PATH}/**/*`, { read: false }).pipe(rm())
})

task('copy:html', () => {
    return src(`${SRC_PATH}/*.html`).pipe(dest(DIST_PATH)).pipe(reload({ stream: true }));
});

task('styles', () => {
    return src([...STYLES_LIBS, `${SRC_PATH}/scss/main.scss`])
        .pipe(gulpif(env === 'dev', sourcemaps.init()))
        .pipe(concat("main.min.scss"))
        .pipe(sassGlob())
        .pipe(sass().on('error', sass.logError))
        .pipe(px2rem())
        .pipe(gulpif(env === 'prod',
            autoprefixer({
                cascade: false
            })))
        .pipe(gulpif(env === 'prod', gcmq()))
        .pipe(gulpif(env === 'prod', cleanCSS()))
        .pipe(gulpif(env === 'dev', sourcemaps.write()))
        .pipe(dest(`${DIST_PATH}/css`))
        .pipe(reload({ stream: true }));
});

task('scripts', () => {
    return src([...JS_LIBS, `${SRC_PATH}/js/*.js`])
        .pipe(gulpif(env === 'dev', sourcemaps.init()))
        .pipe(concat('main.min.js', { newLine: ";" }))
        .pipe(gulpif(env === 'prod',
            babel({
                presets: ['@babel/env']
            })
        ))
        .pipe(gulpif(env === 'prod', uglify()))
        .pipe(gulpif(env === 'dev', sourcemaps.write()))
        .pipe(dest(DIST_PATH))
        .pipe(reload({ stream: true }));

})

task('icons', () => {
    return src(`${SRC_PATH}/img/icons/social_icons/*.svg`)
        .pipe(svgo({
            plugins: [
                {
                    removeAttrs: {
                        attrs: "(fill|stroke|style|width|height|data.*)"
                    }
                }]
        }))
        .pipe(svgSprite({
            mode: {
                symbol: {
                    sprite: "../social_sprite.svg"
                }
            }
        }))
        .pipe(dest(`${DIST_PATH}/img/icons`));
})

task('server', () => {
    browserSync.init({
        server: {
            baseDir: `./${DIST_PATH}`
        },
        open: false
    });
});

task('watch', () => {
    watch(`${SRC_PATH}/scss/**/*.scss`, series('styles'));
    watch(`${SRC_PATH}/*.html`, series('copy:html'));
    watch(`${SRC_PATH}/**/*.js`, series('scripts'));
    watch(`${SRC_PATH}/img/icons/social_icons/*.svg`, series('icons'));
})


task(
    'default',
    series('clean',
        parallel('copy:html', 'styles', 'scripts', 'icons'),
        parallel('watch', 'server')
    )
);

task(
    'build',
    series('clean', parallel('copy:html', 'styles', 'scripts', 'icons'))
);
