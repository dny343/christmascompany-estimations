const sidebar = document.querySelector(".sidebar");
const sidebarClose = document.querySelector("#sidebar-close");
const menu = document.querySelector(".menu-content");
const menuItems = document.querySelectorAll(".submenu-item");
const subMenuTitles = document.querySelectorAll(".submenu .menu-title");

sidebarClose.addEventListener("click", () => sidebar.classList.toggle("close"));

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    menu.classList.add("submenu-active");
    item.classList.add("show-submenu");
    menuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show-submenu");
      }
    });
  });
});

subMenuTitles.forEach((title) => {
  title.addEventListener("click", () => {
    menu.classList.remove("submenu-active");
  });
});

const allowedUsers = ["dnyaneshwar@christmascompany.com", "david@christmascompany.com"];

// Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const errorMessage = document.getElementById('error-message');

    if (allowedUsers.includes(email)) { // Replace with actual authentication logic
        localStorage.setItem('userEmail', email);
        window.location.href = "all.html";
    } else {
        errorMessage.textContent = "Invalid email or password.";
    }
});



// Logout Function
function logout() {
    localStorage.removeItem('userEmail');
    window.location.href = "index.html";
}