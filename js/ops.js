const sections = $('section');
const footer = $('footer');
const display = $('.maincontent');
const sideMenu = $('.nav-sections');
const menuItems = sideMenu.find('.nav-sections__item');
const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();
let inScroll = false;

sections.first().addClass('active');

const countSectionPosition = sectionEq => {
    const position = sectionEq * -100;
    if (isNaN(position)) { 
        console.error('Передано неверное значение в countSectionPosition');
        return 0;
    }
    return position;
}

const changeMenuThemeForSection = sectionEq => {
    const currentSection = sections.eq(sectionEq);
    const menuTheme = currentSection.attr('data-side-menu-theme');
    const activeClass = 'nav-sections_white';

    if (menuTheme === 'white') {
        sideMenu.addClass(activeClass);
    } else {
        sideMenu.removeClass(activeClass);
    }
}

const resetActiveClassForItem = (items, itemEq, activeClass) => {
    items.eq(itemEq).addClass(activeClass).siblings().removeClass(activeClass);
}

const perfomTransition = sectionEq => {

    if (inScroll) return;

    const transitionOver = 1000;
    const mouseInertiaOver = 300;

    inScroll = true;

    const position = countSectionPosition(sectionEq);

    changeMenuThemeForSection(sectionEq);

    display.css({
        transform: `translateY(${position}%)`
    });

    resetActiveClassForItem(sections, sectionEq, 'active');

    setTimeout(() => {
        inScroll = false;
        resetActiveClassForItem(menuItems, sectionEq, 'nav-sections__item_active');
    }, transitionOver + mouseInertiaOver);

}

const viewportScroller = direction => {
    const activeSection = sections.filter('.active');
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    return {
        next() { 
            if (nextSection.length) {
                perfomTransition(nextSection.index());
            }
        },
        prev() { 
            if (prevSection.length) {
                perfomTransition(prevSection.index());
            }
        }
    }
}

$(window).on('wheel', evt => {
    const deltaY = evt.originalEvent.deltaY;
    const scroller = viewportScroller();

    if (deltaY > 0) {
        scroller.next();
    }

    if (deltaY < 0) {
        scroller.prev();
    }
})

$(window).on('keydown', evt => {

    const tagName = evt.target.tagName.toLowerCase();
    const userTypingInInputs = tagName === 'input' || tagName === 'textarea';
    if (userTypingInInputs) return;
    const scroller = viewportScroller();

    switch (evt.keyCode) {
        case 38:
            scroller.prev();
            break;

        case 40:
            scroller.next();
            break;

        default:
            break;
    }
})

$('.wrapper').on('touchmove', evt => evt.preventDefault());
$('[data-scroll-to]').on('click', evt => {
    evt.preventDefault();
    const $this = $(evt.currentTarget);
    const target = $this.attr('data-scroll-to');
    const reqSection = $(`[data-section-id = ${target}]`);

    perfomTransition(reqSection.index());
})

if (isMobile) { 
    $('body').swipe( {
        // https://github.com/mattbryson/TouchSwipe-Jquery-Plugin.git
        swipe: function (event, direction) {
            const scroller = viewportScroller();
            let scrollDirection = "";
            if (direction === "up") scrollDirection = 'next';
            if (direction === "down") scrollDirection = 'prev';
            scroller[scrollDirection]();
        }
      });
}
