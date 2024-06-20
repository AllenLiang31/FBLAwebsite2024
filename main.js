//Adding an event listener to look for incorrect inputs
document.addEventListener('DOMContentLoaded', function () {
    //Get reference of the following inputs
    const form = document.getElementById('CreateAccount');
    const passwordInput = form.querySelector('input[type="password"]');
    const confirmPasswordInput = form.querySelector('input[placeholder="Confirm Password"]');
    const emailInput = form.querySelector('input[placeholder="Email Address"]');
    //create error messages 
    const errorMessagePassword = document.createElement('div');
    errorMessagePassword.classList.add('input-error-message');
    errorMessagePassword.textContent = 'Passwords do not match';
    const errorMessageEmail = document.createElement('div');
    errorMessageEmail.classList.add('input-error-message');
    errorMessageEmail.textContent = 'Invalid email address';
    //checking if the password matches 
    confirmPasswordInput.addEventListener('input', function () {
        //if it do not match then display error
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordInput.parentNode.appendChild(errorMessagePassword);
        } else {
            //if it does then remove the before error message 
            const existingErrorMessage = confirmPasswordInput.parentNode.querySelector('.input-error-message');
            if (existingErrorMessage && existingErrorMessage.textContent === 'Passwords do not match') {
                existingErrorMessage.remove();
            }
        }
    });

    //Check if the email input is a valid email
    emailInput.addEventListener('input', function () {
        const email = emailInput.value;
        const isValidEmail = /\S+@\S+\.\S+/.test(email);
        //if not print error message
        if (!isValidEmail) {
            emailInput.parentNode.appendChild(errorMessageEmail);
        } else {
            //If it does then remove the before error message 
            const existingErrorMessage = emailInput.parentNode.querySelector('.input-error-message');
            if (existingErrorMessage && existingErrorMessage.textContent === 'Invalid email address') {
                existingErrorMessage.remove();
            }
        }
    });

    //check if it should submit or not
    form.addEventListener('submit', function (event) {
        const isValidEmail = /\S+@\S+\.\S+/.test(emailInput.value);
        if (passwordInput.value !== confirmPasswordInput.value || !isValidEmail) {
            event.preventDefault();
            //if either email input and password do not match then don't submit
            if (passwordInput.value !== confirmPasswordInput.value) {
                confirmPasswordInput.parentNode.appendChild(errorMessagePassword);
            }
            if (!isValidEmail) {
                emailInput.parentNode.appendChild(errorMessageEmail);
            }
        }
    });
});
