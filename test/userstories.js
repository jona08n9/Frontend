"use strict";

document.addEventListener("DOMContentLoaded", loadEVT);

let inputResult = [];
function loadEVT() {
  document.querySelector("button").addEventListener("click", insertUS);
}

function insertUS() {
  takeInput();
  insertInput(inputResult);
  document.querySelector("p").classList.remove("hidden");
}

function takeInput() {
  const roll = document.querySelector("#role").value;
  const action = document.querySelector("#action").value;
  const benefit = document.querySelector("#benefit").value;

  return (inputResult = { roll, action, benefit });
}

function insertInput(input) {
  document.querySelector("#role--span").textContent = input.roll;
  document.querySelector("#action--span").textContent = input.action;
  document.querySelector("#benefit--span").textContent = input.benefit;
}
