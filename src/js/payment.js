(function () {
    let paymentType = document.querySelector('.form__payment');
    let cashBlock = paymentType.querySelector('.form__cash');
    let cardBlock = paymentType.querySelector('.form__card');
    let cashLabel = cashBlock.querySelector('label');
    let cardLabel = cardBlock.querySelector('label');
    let cashRadio = cashBlock.querySelector('input');
    let cardRadio = cardBlock.querySelector('input');
    
    paymentType.addEventListener('click', function (evt) { 
        if (evt.target == cashLabel) { 
            if (cashRadio.checked == false) { 
                cashLabel.classList.add('form__label_radio_active');
                cashRadio.checked == true;
                cardLabel.classList.remove('form__label_radio_active');
                cardRadio.checked == false;
            }
        }
        if (evt.target == cardLabel) { 
            if (cardRadio.checked == false) { 
                cardLabel.classList.add('form__label_radio_active');
                cardRadio.checked == true;
                cashLabel.classList.remove('form__label_radio_active');
                cashRadio.checked == false;
            }
        }
    })
})();
