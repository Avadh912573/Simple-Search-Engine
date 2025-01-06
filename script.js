document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("pwd").value;

        if (validateEmail(email) && validatePassword(password)) {
            alert("Login successful!");
        } else {
            alert("Invalid email or password.");
        }
    });

    document.getElementById("registrationForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("pwd").value;

        if (validateEmail(email) && validatePassword(password)) {
            alert("Registration successful!");
        } else {
            alert("Invalid input.");
        }
    });
});

function validateEmail(email) {


    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    return password.length >= 6;
}