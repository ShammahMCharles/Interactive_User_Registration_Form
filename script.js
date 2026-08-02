const userNameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const form = document.getElementById('registrationForm');



form.addEventListener('submit', (event) => {
    event.preventDefault();

    validateInputs();
});

const setErrorFor = (input, message) => {
    const formGroup = input.parentElement;
    const errorMessage = formGroup.querySelector('.error-message');

    errorMessage.innerText = message;
    input.classList.add('error');
    input.classList.remove('success');

}

const setSuccessFor = (input) => {
    const formGroup = input.parentElement;
    const errorMessage = formGroup.querySelector('.error-message');

    errorMessage.innerText = '';
    input.classList.add('success');
    input.classList.remove('error');
};

const validateInputs = () => {
    const username = userNameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    if (username === '') {
        setErrorFor(userNameInput, 'Username Required');
    } else {
        userNameInput.classList.add('success');
    }
};
