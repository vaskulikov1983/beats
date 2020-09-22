$(document).ready(() => { 
    const names = $('.team__name');

    //!on absolute
    

    //!on slideUp
    /*$('.team__name').on('click', evt => { 
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