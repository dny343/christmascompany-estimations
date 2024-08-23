// Profile Page Script
window.onload = function() {
    const userEmail = localStorage.getItem('userEmail');
    if (!allowedUsers.includes(userEmail)) {
        window.location.href = "index.html";
    } else {
        document.getElementById('userEmail').textContent = `${userEmail}`;
    }
};