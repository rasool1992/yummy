// Show and Hide (hamburger, Aside and Menu)
const menu = document.querySelector(".hamburger");
const visibleNav = document.querySelector(".visible-nav");
const showAside = document.querySelector("aside");
const showHiddenNav = document.querySelector(".hidden-nav");
menu.addEventListener("click", (e) => {
  menu.classList.toggle("open");
  visibleNav.classList.toggle("show-hidden-nav");
  showAside.classList.toggle("show-aside");
  showHiddenNav.classList.toggle("animate-menu-links");
});
