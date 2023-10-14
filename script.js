// script.js
// Simulated user data storage (replace with a database in a real application)
const users = [];

document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const regUsername = document.getElementById("regUsername").value;
    const regPassword = document.getElementById("regPassword").value;

    // Check if the username is already taken
    if (users.some((user) => user.username === regUsername)) {
        alert("Username is already taken. Please choose a different one.");
    } else {
        users.push({ username: regUsername, password: regPassword });
        alert("Registration successful! You can now log in.");
    }
});

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;

    const user = users.find((user) => user.username === loginUsername && user.password === loginPassword);

    if (user) {
        document.getElementById("login").style.display = "none";
        document.getElementById("securedPage").style.display = "block";
    } else {
        alert("Login failed. Please check your username and password.");
    }
});
