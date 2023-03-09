"use strict";

document.addEventListener("DOMContentLoaded", initLoops);

const selector = document.querySelector("#select");
const art1 = document.querySelector("#artwork1");
const art2 = document.querySelector("#artwork2");
const art3 = document.querySelector("#artwork3");
const art4 = document.querySelector("#artwork4");
const art5 = document.querySelector("#artwork5");
const art6 = document.querySelector("#artwork6");
const art7 = document.querySelector("#artwork7");
const art8 = document.querySelector("#artwork8");
const art9 = document.querySelector("#artwork9");

function initLoops() {
  document.querySelector("#button").addEventListener("click", makeArt);
}

function makeArt() {
  let choice = Number(selector.value);
  if (choice === 1) {
    console.log(`Artwork ${choice} is being generated`);
    for (let i = 100; i <= 300; i += 20) {
      let createDiv = document.createElement("div");
      createDiv.classList.add("box");
      createDiv.style.height = `${i}px`;
      createDiv.style.width = `${i}px`;
      art1.appendChild(createDiv);
    }
  } else if (choice === 2) {
    console.log(`Artwork ${choice} is being generated`);
    for (let i = 0; i <= 90; i += 10) {
      let createDiv = document.createElement("div");
      createDiv.classList.add("box");
      createDiv.style.transform = `rotate(${i}deg)`;
      art2.appendChild(createDiv);
    }
  } else if (choice === 3) {
    console.log(`Artwork ${choice} is being generated`);
    for (let i = 0; i <= 200; i += 10) {
      let createDiv = document.createElement("div");
      createDiv.classList.add("circle");
      createDiv.style.height = `${i}px`;
      createDiv.style.width = `${i}px`;
      art3.appendChild(createDiv);
    }
  } else if (choice === 4) {
    console.log(`Artwork ${choice} is being generated`);
    for (let i = -90; i <= 90; i += 20) {
      let createDiv = document.createElement("div");
      createDiv.classList.add("box");
      createDiv.style.transform = `translate(${i}px, ${i}px)`;
      art4.appendChild(createDiv);
    }
  } else if (choice === 5) {
    console.log(`Artwork ${choice} is being generated`);
    for (let i = 1; i <= 512; i *= 2) {
      let createDiv = document.createElement("div");
      createDiv.classList.add("circle");
      createDiv.style.height = `${i}px`;
      createDiv.style.width = `${i}px`;
      art5.appendChild(createDiv);
    }
  } else if (choice === 6) {
    console.log(`Artwork ${choice} is being generated`);
    for (let i = -20; i <= 45; i += 5) {
      let createDiv = document.createElement("div");
      createDiv.classList.add("circle");
      createDiv.style.transform = `translateX(${i - 50}px) rotate(${i * 4}deg)`;
      art6.appendChild(createDiv);
    }
  } else if (choice === 7) {
    console.log(`Artwork ${choice} is being generated`);
    for (let i = 0; i <= 200; i += 10) {
      let createDiv = document.createElement("div");
      createDiv.classList.add("circle");
      createDiv.style.transform = `translate(${i}px, -${i / 2}px)`;
      createDiv.style.width = `${i}px`;
      createDiv.style.height = `${i}px`;
      art7.appendChild(createDiv);
    }
  } else if (choice === 8) {
    console.log(`Artwork ${choice} is being generated`);
    for (let i = 50; i <= 200; i += 10) {
      let createDiv = document.createElement("div");
      createDiv.classList.add("box");
      createDiv.style.width = `${i}px`;
      createDiv.style.height = `${i}px`;
      createDiv.style.transform = `translateX(${i / 2}px) rotate(${i}deg)`;
      art8.appendChild(createDiv);
    }
  } else {
    console.log(`Artwork ${choice} is being generated`);
    for (let i = 50; i <= 200; i += 30) {
      let createDiv1 = document.createElement("div");
      let createDiv2 = document.createElement("div");
      createDiv1.classList.add("box");
      createDiv1.style.width = `${i}px`;
      createDiv1.style.height = `${i}px`;
      createDiv2.classList.add("circle");
      createDiv2.style.width = `${i}px`;
      createDiv2.style.height = `${i}px`;
      art9.appendChild(createDiv1);
      art9.appendChild(createDiv2);
    }
  }
}
