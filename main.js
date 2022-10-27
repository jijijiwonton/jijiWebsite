"use strict";

// Define a global variable
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

const navbarChangeMode = "navbar__dark";

/**
 * A method to change navbar background when the scrolling position is higher than navbar height
 */
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add(navbarChangeMode);
  } else {
    navbar.classList.remove(navbarChangeMode);
  }
});

/**
 * Handling a scroll action when clicking on the navbar menu
 */
const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;

  if (link == null) {
    return;
  }

  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
});
