// Login function
const loginForm = document.getElementById('login-form');
const loginMessage = document.getElementById('login-message');
const username = document.getElementById('username');
const password = document.getElementById('password');

// Dummy user data for demonstration purposes (do not use in a real-world scenario)
const dummyUserData = {
    username: 'headphone',
    password: '123'
};

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Validate the username and password
    if (username.value === dummyUserData.username && password.value === dummyUserData.password) {
        loginMessage.style.display = 'block';
        loginForm.reset();
    } else {
        alert('Invalid username or password. Please try again.');
    }
});

username.addEventListener('click', function (event) {
    document.querySelector(".image").innerHTML = /*html*/`
        <center><img id="eyes-opened" src="../img/login/eyes-opened.jpg" height="250px"></center>
    `
});

password.addEventListener('click', function (event) {
    document.querySelector(".image").innerHTML = /*html*/`
        <center><img id="eyes-closed" src="../img/login/eyes-closed.jpg" height="250px"></center>
    `
});