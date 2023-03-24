"use strict";

window.addEventListener("DOMContentLoaded", loadEVT);

function loadEVT() {
  document.querySelector("input[type=checkbox]").addEventListener("click", checkIfInputTrue);
  document.querySelectorAll("input[type=radio]").forEach((radio) => {
    radio.addEventListener("click", checkIfRadioTrue);
  });
}

function checkIfInputTrue() {
  if (document.querySelector("input[type=checkbox]").checked === true) {
    document.querySelector("#selection fieldset:first-child label span").classList.add("active");
  } else {
    document.querySelector("#selection fieldset:first-child label span").classList.remove("active");
  }
}

function checkIfRadioTrue() {
  console.log(`#all = ${document.querySelector("#all").checked}, #lorem = ${document.querySelector("#lorm").checked}, #ipsum = ${document.querySelector("#ipsum").checked}`);
}
