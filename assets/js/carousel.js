document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".header-toggle");
  const navMenu = document.querySelector(".header-nav");
  const langMenu = document.querySelector(".header-lang");

  toggleButton.addEventListener("click", function () {
    navMenu.classList.toggle("show");
    langMenu.classList.toggle("show");
  });
});
