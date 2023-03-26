"use strict";

window.addEventListener("DOMContentLoaded", initPage);

function initPage() {
  console.log(initPage, "Ready");
  document.querySelectorAll(".project__container").forEach((thing) => {
    thing.addEventListener("mouseenter", startAnimation);
    thing.addEventListener("mouseleave", stopAnimation);
  });
}

function startAnimation(e) {
  console.log("ENTER");
  if (e.target.classList.contains("first") === true) {
    // console.log("13C0101");
    let image = document.querySelector(".first img");
    let container = document.querySelector(".first");
    showImage(container, image);
  } else if (e.target.classList.contains("second") === true) {
    // console.log("13C0102");
    let image = document.querySelector(".second img");
    let container = document.querySelector(".second");
    showImage(container, image);
  } else if (e.target.classList.contains("third") === true) {
    // console.log("13C0201");
    let image = document.querySelector(".third img");
    let container = document.querySelector(".third");
    showImage(container, image);
  }

  function showImage(container, image) {
    document.querySelectorAll(".fadeOut").forEach((thing) => {
      thing.classList.remove("fadeOut");
    });
    // console.log(container, image);
    image.classList.add("fadeIn");
  }
}

function stopAnimation() {
  console.log("LEAVING");
  document.querySelectorAll(".fadeIn").forEach((thing) => {
    thing.classList.add("fadeOut");
    thing.classList.remove("fadeIn");
  });
}
