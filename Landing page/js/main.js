const mobileMenuBtn = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-links");
const menuIcon = document.getElementById("menu-toggle-icon");
const navbar = document.querySelector(".navbar");

mobileMenuBtn.addEventListener("click", function () {
    navLinks.classList.toggle('active');
    navbar.classList.toggle('expanded');
    menuIcon.classList.contains("fa-bars")
        ? menuIcon.classList.replace("fa-bars", "fa-xmark")
        : menuIcon.classList.replace("fa-xmark", "fa-bars");
});

document.addEventListener("click", function (event) {
    if (window.innerWidth >= 768) return;
    if (!navLinks.classList.contains("active")) return;
    if (
        !navbar.contains(event.target) &&
        !mobileMenuBtn.contains(event.target)
    ) {
        navLinks.classList.remove("active");
        navbar.classList.remove("expanded");
        menuIcon.classList.replace("fa-xmark", "fa-bars");
    }
});