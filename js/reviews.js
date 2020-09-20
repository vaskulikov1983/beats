$(document).ready(() => { 
    const reviewsItems = $('.reviews__item');
    const navButtons = $('.nav-sliders__button');

    $('.nav-sliders__list').on('click', (evt) => { 
        if ($(evt.target).hasClass('nav-sliders__img')) { 
            const navIndex = $(evt.target).closest('li').index();
            reviewsItems.each((ndx, item) => {
                $(item).removeClass('reviews__item_active');
            });
            navButtons.each((ndx, item) => {
                $(item).removeClass('nav-sliders__button_active');
            });
            reviewsItems.eq(navIndex).addClass('reviews__item_active');
            navButtons.eq(navIndex).addClass('nav-sliders__button_active');
        }
    })
})