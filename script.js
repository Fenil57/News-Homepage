const navMenu = document.querySelector(".nav__menu");
const mobileMenu = document.querySelector(".mobile__menu");
const mobileMenuClose = document.querySelector(".mobile__menu__close");

navMenu.addEventListener("click", () => {
  mobileMenu.style.display = "block";
});

mobileMenuClose.addEventListener("click", () => {
  mobileMenu.style.display = "none";
});
