////////////////////// Mobile Navigation
const nav = document.querySelector(".nav");
const hamburger = document.querySelector(".nav__hamburger");
const navLinks = document.querySelector(".nav__list");

//////////////////////// Dropdown
const dropdownParent = document.querySelector(".dropdown__js");
const dropdownChild = document.querySelector(".dropdown");
const dropdownIcon = document.querySelector(".fa-caret-down");

// Dropdown open
dropdownParent.addEventListener("mouseover", () => {
  console.log("hey");
  dropdownChild.classList.remove("hide__dropdown");

  if (window.innerWidth >= 900) {
    dropdownIcon.style.transform = "rotate(180deg)";
  }
});

//Dropdownclose
dropdownParent.addEventListener("mouseout", () => {
  if (dropdownChild.classList.contains("hide__dropdown")) return;
  dropdownChild.classList.add("hide__dropdown");
  if (window.innerWidth >= 900) {
    dropdownIcon.style.transform = "rotate(0)";
  }
});

///////////////// Loader
const loader = document.querySelector(".loader__wrapper");

const setNavListPosition = function () {
  // setNavListPosition in Mobile
  navHeight = nav.clientHeight;
  navLinks.style.top = `${navHeight}px`;
};

const toggleMenu = function () {
  navLinks.classList.toggle("show");
  hamburger.classList.toggle("close");
};

// eventlisteners
window.addEventListener("DOMContentLoaded", () => {
  setNavListPosition();
  document.body.parentNode.style.overflowY = "hidden";
  setTimeout(() => {
    loader.classList.add("loader__hide");
    document.body.parentNode.style.overflowY = "auto";
  }, 1500);
});

window.addEventListener("resize", setNavListPosition);

hamburger.addEventListener("click", toggleMenu);

// ////////////// Sticky nav
const hero = document.querySelector(".hero");

const headerObserver = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];
    if (!entry.isIntersecting) {
      nav.classList.add("nav__scrolled");
    } else {
      nav.classList.remove("nav__scrolled");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: `-${nav.clientHeight}px`,
  }
);

headerObserver.observe(hero);

//////////////// Hero Slider
const slider = document.querySelector(".hero__slides");
const slides = document.querySelectorAll(".hero__slide");
const pagination = document.querySelector(".pagination");
const circles = document.querySelectorAll(".circle");

let currentSlide = 0;
let totalSlides = slides.length;

// btns
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

// Functions
const goToSlide = function (curSlide) {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
  });
};

const activateCircle = function (curSlide) {
  circles.forEach((circle) => {
    circle.classList.remove("circle--active");
  });

  document
    .querySelector(`.circle[data-slide="${curSlide}"]`)
    .classList.add("circle--active");
};

// set first slide
goToSlide(currentSlide);
activateCircle(currentSlide);

// Next slide
nextBtn.addEventListener("click", () => {
  if (currentSlide === totalSlides - 1) currentSlide = 0;
  else currentSlide++;
  goToSlide(currentSlide);
  activateCircle(currentSlide);
});

// Prev slide
prevBtn.addEventListener("click", () => {
  if (currentSlide === 0) currentSlide = totalSlides - 1;
  else currentSlide--;
  goToSlide(currentSlide);
  activateCircle(currentSlide);
});

// Pagination
pagination.addEventListener("click", (e) => {
  if (e.target.classList.contains("circle")) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateCircle(slide);
  }
});

// Slideshow
setInterval(() => {
  if (currentSlide === totalSlides - 1) currentSlide = 0;
  else currentSlide++;
  goToSlide(currentSlide);
  activateCircle(currentSlide);
}, 5000);
