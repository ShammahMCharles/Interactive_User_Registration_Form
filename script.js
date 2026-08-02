const userNameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const form = document.getElementById('registrationForm');




form.addEventListener('submit', (event) => {
    event.preventDefault();
    localStorage.setItem('username', JSON.stringify(userNameInput.value));
    localStorage.setItem('email', JSON.stringify(emailInput.value));
    localStorage.setItem('password', JSON.stringify(passwordInput.value));

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

const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const username = userNameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    if (username === '') {
        setErrorFor(userNameInput, 'Username Required');
    } else {
        setSuccessFor(userNameInput);
    }

    if (email === '') {
        setErrorFor(emailInput, 'Email Required');
    } else if (!isValidEmail(email)) {
        setErrorFor(emailInput, 'Email is not valid');
    } else {
        setSuccessFor(emailInput);
    }

    if (password === '') {
        setErrorFor(passwordInput, 'Password Required');
    } else if (password.length < 8) {
        setErrorFor(passwordInput, 'Password must be at least 8 characters');
    } else if (!/[A-Z]/.test(password)) {
        setErrorFor(passwordInput, 'Password must contain at least one uppercase letter');
    } else if (!/[a-z]/.test(password)) {
        setErrorFor(passwordInput, 'Password must contain at least one lowercase letter');
    } else if (!/[0-9]/.test(password)) {
        setErrorFor(passwordInput, 'Password must contain at least one number');
    } else {
        setSuccessFor(passwordInput);
    }

    if (confirmPassword === '') {
        setErrorFor(confirmPasswordInput, 'Confirm your password');
    } else if (confirmPassword !== password) {
        setErrorFor(confirmPasswordInput, 'Passwords do not match');
    } else {
        setSuccessFor(confirmPasswordInput);
    }
};
