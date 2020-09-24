$(document).ready(() => { 
    //!on absolute
    $('.team__list').on('click', evt => { 
        if ($(window).outerWidth() > 768) {
            if ($(evt.target).hasClass('team__name')) {
                const descriptionHeigth = $(evt.target).siblings('.team__description').find('.specialization').height();
                if ($(evt.target).hasClass('team__name_active')) {
                    $(evt.target).removeClass('team__name_active');
                    $(evt.target).siblings('.team__description').height(0);
                } else {
                    $('.team__name').removeClass('team__name_active');
                    $('.team__description').height(0);
                    $(evt.target).siblings('.team__description').height(descriptionHeigth);
                    $(evt.target).addClass('team__name_active');
                }
            }
        } else { 
            const names = $('.team__name');
            const name = $(evt.target);
            const descript = name.next();

            if (!name.hasClass('team__name_active')) {
                names.each((ndx, item) => {
                    $(item).removeClass('team__name_active');
                    $(item).siblings().slideUp(150);
                });
                name.addClass('team__name_active');
                name.siblings('.team__description').css('margin-bottom', '20px');
                name.siblings().slideDown(150);
                name.siblings().find('.specialization').slideDown(150);
            } else {
                name.removeClass('team__name_active')
                name.siblings().slideUp(150);
                name.siblings().find('.specialization').slideUp(150);
            }
        }
        
    })

    //!on slideUp
    /*const names = $('.team__name');
    $('.team__name').on('click', evt => { 
        let windowWidth = $(window).outerWidth();
        const name = $(evt.target);
        const spec = name.next();

        if (windowWidth > 768) {
            if (!name.hasClass('team__name_active')) {
                names.each((ndx, item) => {
                    $(item).removeClass('team__name_active');
                    $(item).next().slideUp(100);
                });
                name.addClass('team__name_active');
                spec.slideDown(100);
            } else {
                name.removeClass('team__name_active')
                spec.slideUp(100);
            }
        } else { 
            if (!name.hasClass('team__name_active')) {
                names.each((ndx, item) => {
                    $(item).removeClass('team__name_active');
                    $(item).siblings().slideUp(150);
                });
                name.addClass('team__name_active');
                spec.css('margin-bottom', '20px');
                name.siblings().slideDown(150);
            } else {
                name.removeClass('team__name_active')
                name.siblings().slideUp(150);
            }
        }     
    })*/
})

/*const members = document.querySelectorAll('.team__name');
const specializations = document.querySelectorAll('.team__specialization');
const memberList = document.querySelector('.team__list');

memberList.addEventListener('click', evt => { 
    if (evt.target.classList.contains('team__name')) { 
        let targetName = evt.target.textContent;
        let arrayNames = [];
        for (let member of members) { 
            arrayNames.push(member.textContent);
        }
        let targetNameIndex = arrayNames.indexOf(targetName);
        specializations[targetNameIndex].classList.toggle('specialization_active');
    };
})*/