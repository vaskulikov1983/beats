(function () {
    $(document).ready(() => { 
        const reviewsItems = $('.reviews__item');
        const navButtons = $('.nav-sliders__button');
    
        $('.nav-sliders__list').on('click', (evt) => { 
            if ($(evt.target).hasClass('nav-sliders__img')) {
                const navIndex = $(evt.target).closest('li').index();
    
                $('.reviews__item').eq(navIndex).addClass('reviews__item_active').siblings().removeClass('reviews__item_active');
                $('.nav-sliders__list .nav-sliders__button').removeClass('nav-sliders__button_active');
    
                $(evt.target).closest('.nav-sliders__button').addClass('nav-sliders__button_active');
                $('.reviews__item').eq(navIndex).fadeIn().siblings().fadeOut();
            }
        })
    })
})();
