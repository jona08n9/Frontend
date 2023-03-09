"use strict";

//When page load, fun function to add EventListeners
document.addEventListener("DOMContentLoaded", loadPage);

//Run function to create the event listeners
function loadPage() {
  console.log("Page Loaded");
  addEvents();
}
//Add eventlistener to the input
function addEvents() {
  document.querySelector("input").addEventListener("input", loadColor);
}

//Load the colors
function loadColor() {
  //Take the hex value from the input.
  const hex = document.querySelector("input").value;

  //Define rgb and HSL, and run the functions to calculate dem. Use the return values from the previous functions.
  const rgb = calculateRGB(hex);
  const hsl = calculateHSL(rgb);
  displayColors(hex, rgb, hsl);
}

//RGB = Take the substrings of HEX index 1-3(R), 3-5(G) and 5-7(B)
function calculateRGB(hex) {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);

  //Return r,g and b to loadColor()
  return { r, g, b };
}

//Calculate HSL. Lot of math, so yeah... Coolio
function calculateHSL(rgb) {
  rgb.r /= 255;
  rgb.g /= 255;
  rgb.b /= 255;

  const min = Math.min(rgb.r, rgb.g, rgb.b);
  const max = Math.max(rgb.r, rgb.g, rgb.b);
  let h, s, l;

  if (max === min) {
    h = 0;
  } else if (max === rgb.r) {
    h = 60 * (0 + (rgb.g - rgb.b) / (max - min));
  } else if (max === rgb.g) {
    h = 60 * (2 + (rgb.b - rgb.r) / (max - min));
  } else if (max === rgb.b) {
    h = 60 * (4 + (rgb.r - rgb.g) / (max - min));
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

  rgb.r *= 255;
  rgb.g *= 255;
  rgb.b *= 255;

  return { h, s, l };

  //   console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
}

function displayColors(hex, rgb, hsl) {
  boxBackgroundChange(hex);
  HEXValueChange(hex);
  RGBValueChange(rgb);
  HSLValueChange(hsl);
  //Added this to see the difference of using Math.rounding vs toFixed(),
  HSLFixedValueChange(hsl);
}

function boxBackgroundChange(hex) {
  document.querySelector("#colorDisplay").style.backgroundColor = hex;
}

function HEXValueChange(hex) {
  document.querySelector("#hex").textContent = `${hex.toUpperCase()}`;
}

function RGBValueChange(rgb) {
  document.querySelector("#rgb").textContent = `(${rgb.r}, ${rgb.g}, ${rgb.b})`;
}

function HSLValueChange(hsl) {
  //You SHOULD prolly do the rounding in the caluclation of HS & L, but come on. We are not that smart yet :-) kh
  document.querySelector("#hsl").textContent = `(${Math.round(hsl.h)}, ${Math.round(hsl.s)}%, ${Math.round(hsl.l)}%)`;
}

function HSLFixedValueChange(hsl) {
  document.querySelector("#hslFixed").textContent = `(${hsl.h.toFixed(0)}, ${hsl.s.toFixed(0)}%, ${hsl.l.toFixed(0)}%)`;
}
