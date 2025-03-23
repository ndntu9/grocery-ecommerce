const emailInput = $('.form__input[type="email"]');
const emailMessage = emailInput.parentElement.querySelector('.form__message');

const passwordInput = $('.form__input[type="password"]');
const passwordMessage = passwordInput.parentElement.querySelector('.form__message');

$$('.form__input').forEach(function (formInput) {
    formInput.oninput = function () {
        formInput.parentElement.querySelector('.form__message').innerText = '';
        formInput.parentElement.querySelector('.form__message').style.display = 'none';

        if (formInput.classList.contains('warning')) {
            formInput.classList.remove('warning');
        }
    };
});

$('.form--auth').onsubmit = function (e) {
    e.preventDefault();

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    let isValid = true;

    if (!isNotEmpty(emailValue)) {
        emailInput.classList.add('warning');
        showFormMessage(emailMessage, 'Email cannot be empty');
        isValid = false;
    }

    if (isNotEmpty(emailValue) && !isEmail(emailValue)) {
        emailInput.classList.add('warning');
        showFormMessage(emailMessage, 'Please enter a valid email address');
        isValid = false;
    }

    if (!isNotEmpty(passwordValue)) {
        passwordInput.classList.add('warning');
        showFormMessage(passwordMessage, 'Password cannot be empty');
        isValid = false;
    }

    if (isNotEmpty(passwordValue) && !isStrongPassword(passwordValue).test) {
        passwordInput.classList.add('warning');
        showFormMessage(passwordMessage, isStrongPassword(passwordValue).message);
        isValid = false;
    }

    if (isValid) {
        window.location.href = '../home.html';
    }
};
