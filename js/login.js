document.getElementById('login-btn').addEventListener('click', function () {
    const email = document.getElementById('email-field').value;
    const password = document.getElementById('password-field').value;
    if (email === 'bank@calc.com' && password === 'secret') {
        window.location.href = 'calc.html';
    }
    else {
        alert('Incorrect email or password!');
    }
})