const nav = document.querySelector(".nav");
const hamburger = document.querySelector(".nav__hamburger");
const navLinks = document.querySelector(".nav__list");

const setNavListPosition = function () {
  // setNavListPosition in Mobile
  navHeight = nav.clientHeight;
  navLinks.style.top = `${navHeight}px`;
};

const toggleMenu = function () {
  navLinks.classList.toggle("show");
  hamburger.classList.toggle("close");
};

// Eventlisteners
window.addEventListener("DOMContentLoaded", setNavListPosition);

window.addEventListener("resize", setNavListPosition);

hamburger.addEventListener("click", toggleMenu);
