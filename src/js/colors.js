(function () {
    $(document).ready(() => {
        $('.colors__list').on('click', evt => {
            evt.preventDefault();
    
            const item = evt.target;
            const colorsItem = $(item).closest('.colors__item');
            const colorsItems = $('.colors__item');
            const colorsContents = $('.colors__content');
            const content = $(colorsItem).find('.colors__content');
            
            const contentText = $(content).find('.colors__text');
            const contentTextPadding = parseInt(contentText.css('padding'));
            console.log(contentTextPadding);
            const windowWidth = $(window).outerWidth();
            const freeSpaceWidthDesktop = windowWidth - $('.colors__title-bookmark').width() * $('.colors__title-bookmark').length;
            const freeSpaceWidthMobile = windowWidth - $('.colors__title-bookmark').width();
    
            const isMobile = () => { 
                if (windowWidth >= 480) {
                    return false;
                } else { 
                    return true;
                }
            }
    
            const openClose = () => {
                if (content.hasClass('colors__content_active')) {
                    colorsContents.removeClass('colors__content_active'); 
                    colorsItems.removeClass('colors__item_mobile');
                    content.outerWidth(0);
                } else {
                    colorsContents.removeClass('colors__content_active');
                    colorsItems.removeClass('colors__item_mobile');
                    colorsContents.outerWidth(0);
                    content.addClass('colors__content_active');                 
                    
                    if (isMobile()) {
                        colorsItem.addClass('colors__item_mobile');
                        contentText.outerWidth(freeSpaceWidthMobile);
                        content.outerWidth(freeSpaceWidthMobile);
                        
                        
                    } else { 
                         
                        if (freeSpaceWidthDesktop >= 524) {
                            contentText.outerWidth(524);
                            content.outerWidth(524);
                        } else { 
                            contentText.outerWidth(freeSpaceWidthDesktop/* - contentTextPadding * 2*/);
                            content.outerWidth(freeSpaceWidthDesktop);
                        }
                    }
                    
                    
                }
                $('.colors__close').on('click', () => {
                    content.removeClass('colors__content_active');
                    colorsItems.removeClass('colors__item_mobile');
                    content.outerWidth(0);
                })
            };
            
    
            if ($(item).hasClass('colors__title-bookmark') || $(item).hasClass('link')) {
                openClose();
            }
        })
    })
})();
