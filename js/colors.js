$(document).ready(() => {
    $('.colors__list').on('click', evt => {
        evt.preventDefault();

        const item = evt.target;
        const colorsItem = $(item).closest('.colors__item');
        const content = $(colorsItem).find('.colors__content');
        const contentText = $(content).find('.colors__text');
        
        content.css('padding', '20px');

        if ($(item).hasClass('colors__title-bookmark') || $(item).hasClass('link')) {
            const contentWidth = contentText.width();
            content.width(500);
        }
    })
})