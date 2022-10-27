"use strict";

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
