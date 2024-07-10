document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert('All fields are required.');
        return;
    }
    const users = JSON.parse(localStorage.getItem('users')) || [];
   
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        alert('login sucessfully');

        setTimeout(() => {
            window.location.href = 'home.html';
        }, 1000);
    } else {
        alert('Invalid username or password');
    }
});


