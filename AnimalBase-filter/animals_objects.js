"use strict";

//Add an event listener for when all content in the Window is loaded (Can also use document.addEventListener... doesn't matter)
window.addEventListener("DOMContentLoaded", start);

//Define the array for allAnimals
const allAnimals = [];

//Adding a globalProb for "cleaning up"
const globalProb = { actionFilter: "*" };

//Start funktion with Eventlisteners for the buttons + load the JSON file
function start() {
  console.log("ready");
  //EVTListeners for filter buttons
  document.querySelectorAll("[data-action='filter']").forEach((but) => {
    but.addEventListener("click", selectFilter);
  });
  //EVTListeners for sort buttons
  document.querySelectorAll("[data-action='sort']").forEach((but) => {
    but.addEventListener("click", selectSort);
  });
  loadJSON("animals.json", prepareObjects);
}

async function loadJSON(url, prepareObjects) {
  const response = await fetch(url);
  const jsonData = await response.json();
  prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
  jsonData.forEach((jsonObject) => {
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

    allAnimals.push(animal);
  });

  displayList(allAnimals);
}

function displayList(animals) {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  animals.forEach(displayAnimal);
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

function selectFilter(event) {
  const filter = event.target.dataset.filter;
  console.log(filter);
  filterList(filter);
}

function filterList(animalType) {
  let filteredList = allAnimals;
  if (animalType === "cat") {
    filteredList = allAnimals.filter(isCat);
  } else if (animalType === "dog") {
    filteredList = allAnimals.filter(isDog);
  }
  displayList(filteredList);
}

function isCat(animal) {
  return animal.type === "cat";
}
function isDog(animal) {
  return animal.type === "dog";
}

function selectSort(event) {
  const sort = event.target.dataset.filter;
  console.log(sort);
  sortList(sort);
}

function sortList(sortBy) {
  let sortedList = allAnimals;
  if (sortBy === "name") {
    sortedList = allAnimals.sort(sortByName);
  } else if (sortBy === "type") {
    sortedList = allAnimals.sort(sortByType);
  }

  displayList(sortedList);
}

function sortByName(animalA, animalB) {
  if (animalA.name < animalB.name) {
    return -1;
  } else {
    return 1;
  }
}

function sortByType(animalA, animalB) {
  if (animalA.type < animalB.type) {
    return -1;
  } else {
    return 1;
  }
}
