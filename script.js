const allowedUsers = ["dnyaneshwar@christmascompany.com", "david@christmascompany.com"];

// Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const errorMessage = document.getElementById('error-message');

    if (allowedUsers.includes(email)) { // Replace with actual authentication logic
        localStorage.setItem('userEmail', email);
        window.location.href = "profile.html";
    } else {
        errorMessage.textContent = "Invalid email or password.";
    }
});



// Logout Function
function logout() {
    localStorage.removeItem('userEmail');
    window.location.href = "index.html";
}
