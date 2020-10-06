(function () {
    let checkboxLabel = document.querySelector('.form__label_checkbox');
    let checkboxInput = checkboxLabel.querySelector('input');

    checkboxLabel.addEventListener('click', function () {
        if (checkboxInput.checked == true) {
            checkboxInput.checked = false;
            checkboxLabel.classList.remove('form__label_checkbox_active');
        } else {
            checkboxInput.checked = true;
            checkboxLabel.classList.add('form__label_checkbox_active');
        }
    })
})();
