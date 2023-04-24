// Create account function
const createAccountForm = document.getElementById('create-account-form');
const accountMessage = document.getElementById('account-message');

createAccountForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the input values
    const newUsername = document.getElementById('new-username').value;
    const newEmail = document.getElementById('new-email').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validate the form fields (you can add more custom validation if needed)
    if (newPassword === confirmPassword) {
        // Process the form data (e.g., send it to a server or display a message)
        accountMessage.style.display = 'block';
        createAccountForm.reset();
    } else {
        // Display an error message
        alert('Passwords do not match. Please try again.');
    }
});
