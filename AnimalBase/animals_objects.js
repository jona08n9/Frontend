"use strict";

window.addEventListener("DOMContentLoaded", start);

const allAnimals = [];

function start() {
  console.log("ready");

  loadJSON();
}

function loadJSON() {
  fetch("animals.json")
    .then((response) => response.json())
    .then((jsonData) => {
      // when loaded, prepare objects
      prepareObjects(jsonData);
    });
}

function prepareObjects(jsonData) {
  jsonData.forEach((jsonObject) => {
    // TODO: Create new object with cleaned data - and store that in the allAnimals array

    const Animal = {
      name: "",
      type: "",
      desc: "unknows",
      age: 0,
    };

    const animal = Object.create(Animal);

    const text = jsonObject.fullname.split(" ");
    animal.age = jsonObject.age;
    animal.name = text[0];
    animal.desc = text[2];
    animal.type = text[3];

    //OR do this

    // animal.name = jsonObject.fullname.substring(0, jsonObject.fullname.indexOf(" "));
    // animal.type = jsonObject.fullname.substring(jsonObject.fullname.lastIndexOf(" ") + 1);
    // animal.desc = jsonObject.fullname.substring(jsonObject.fullname.indexOf("the") + 4, jsonObject.fullname.lastIndexOf(" "));
    // animal.age = jsonObject.age;

    allAnimals.push(animal);

    // TODO: MISSING CODE HERE !!!
  });

  displayList();
}

function displayList() {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  allAnimals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
