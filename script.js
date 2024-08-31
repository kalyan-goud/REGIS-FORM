document.getElementById('registrationForm').addEventListener('submit', function(event) {
    let valid = true;


    document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');


    const username = document.getElementById('username').value;
    if (username.length < 3) {
        document.getElementById('usernameError').textContent = 'Username must be at least 3 characters long.';
        document.getElementById('usernameError').style.display = 'block';
        valid = false;
    }


    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    }


    const password = document.getElementById('password').value;
    if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long.';
        document.getElementById('passwordError').style.display = 'block';
        valid = false;
    }


    const confirmPassword = document.getElementById('confirmPassword').value;
    if (confirmPassword !== password) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        document.getElementById('confirmPasswordError').style.display = 'block';
        valid = false;
    }


    if (!valid) {
        event.preventDefault();
    }
});