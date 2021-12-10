const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", Menu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function Menu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// Inspired from https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0