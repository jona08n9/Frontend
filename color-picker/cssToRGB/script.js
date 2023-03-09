"use strict";

document.addEventListener("DOMContentLoaded", loadPage);

const inputField = document.querySelector("input");
let r, g, b;

function loadPage() {
  console.log("Page Loaded");
  addEvents();
}

function addEvents() {
  inputField.addEventListener("input", loadColor);
  console.log("Added Event Listener");
}

function loadColor() {
  console.log(`Input color: ${inputField.value}`);
  r = parseInt(inputField.value.substring(1, 3), 16);
  g = parseInt(inputField.value.substring(3, 5), 16);
  b = parseInt(inputField.value.substring(5, 7), 16);

  console.log(`Converts to: RGB(${r},${g},${b})`);
}
