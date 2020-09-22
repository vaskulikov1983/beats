const form = document.querySelector('.form');
const submitButton = form.querySelector('.form__submit-button');
const name = form.elements.name;
const phone = form.elements.phone;
const comment = form.elements.comment;
const submitOverlay = document.querySelector('.submit-overlay');
const submitText = submitOverlay.querySelector('.submit-overlay__text');
const submitOverlayButton = submitOverlay.querySelector('.submit-overlay__button');


submitButton.addEventListener('click', evt => {
    evt.preventDefault();
    if (validateForm()) {
        let data = {
            name: name.value,
            phone: phone.value,
            comment: comment.value,
            to: 'messssdf@sdfdsf.com'
        };

        console.log(data);

        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.setRequestHeader('content-type', 'aplication/json');
        xhr.send(JSON.stringify(data));
        xhr.addEventListener('load', () => {
            let answer = xhr.response;
            submitOverlay.classList.add('submit-overlay_active');
            submitText.textContent = answer.message;
            submitOverlayButton.addEventListener('click', (evt) => { 
                evt.preventDefault();
                submitOverlay.classList.remove('submit-overlay_active');
            })
        });
    }

})

const validateField = field => {
    if (!field.checkValidity()) {

        /*let parrent = field.closest('div');
        let errorMessage = document.createElement('div');
        errorMessage.classList.add('error-message');
        errorMessage.innerHTML = '<p>' + field.validationMessage + '</p>';
        parrent.appendChild(errorMessage);*/
        field.placeholder = field.validationMessage;
        field.classList.add('form__input_invalid');

        return false;
    } else {
        return true;
    }
}

const validateForm = () => {
    let valid = true;

    if (!validateField(name)) {
        valid = false;
    }
    if (!validateField(phone)) {
        valid = false;
    }
    if (!validateField(comment)) {
        valid = false;
    }

    return valid;
}

