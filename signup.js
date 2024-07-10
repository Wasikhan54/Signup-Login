document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!username || !password || !confirmPassword) {
        alert('All fields are required.');
        return;
    }
console.log(username)
console.log(password)
console.log(confirmPassword)
if (password.length <8){
    alert('password must be 8 character')
    return;
}
if(password !== confirmPassword){
    alert('password not same')
    return;
}
    const users = JSON.parse(localStorage.getItem('users')) || [];

    users.push({username,password});
    localStorage.setItem('users', JSON.stringify(users));
    
    alert('User signed up successfully!');

    // Redirect to login page after 1 second
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 1000);
});
