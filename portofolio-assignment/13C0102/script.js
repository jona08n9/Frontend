"use strict";

window.addEventListener("DOMContentLoaded", initPage);

let theme = localStorage.getItem("data-theme");
const changeThemeToDark = () => {
  document.documentElement.setAttribute("data-theme", "dark");
  document.querySelector("nav img").src = "graphics/MaterialSymbolsLightMode.svg";
  localStorage.setItem("data-theme", "dark"); // save theme to local storage
};
const changeThemeToLight = () => {
  document.documentElement.setAttribute("data-theme", "light");
  document.querySelector("nav img").src = "graphics/MaterialSymbolsDarkModeOutline.svg";
  localStorage.setItem("data-theme", "light"); // save theme to local storage
};

function initPage() {
  document.querySelector("nav img").addEventListener("click", changeTheme);
}

function changeTheme() {
  let theme = localStorage.getItem("data-theme"); // Retrieve saved them from local storage
  if (theme === "dark") {
    changeThemeToLight();
  } else {
    changeThemeToDark();
  }
}
