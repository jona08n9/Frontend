"use strict";

document.addEventListener("DOMContentLoaded", loadPage);

const inputField = document.querySelector("input");
let hex, h, s, l, r, g, b;

function loadPage() {
  console.log("Page Loaded");
  addEvents();
}

function addEvents() {
  inputField.addEventListener("input", loadColor);
  console.log("Added Event Listener");
}

function loadColor() {
  hex = inputField.value;

  calculateRGB(hex);
  calculateHSL(r, g, b);
  displayColors(hex, r, g, b, h, s, l);
}

function displayColors(hex, r, g, b, h, s, l) {
  document.querySelector("#colorDisplay").style.backgroundColor = hex;
  document.querySelector("#hex").textContent = `${hex}`;
  document.querySelector("#rgb").textContent = `(${r}, ${g}, ${b})`;
  document.querySelector("#hsl").textContent = `(${h.toFixed(0)}, ${s.toFixed(0)}%, ${l.toFixed(0)}%)`;
}

function calculateRGB(hex) {
  r = parseInt(hex.substring(1, 3), 16);
  g = parseInt(hex.substring(3, 5), 16);
  b = parseInt(hex.substring(5, 7), 16);
}

function calculateHSL(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  //   console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
}
