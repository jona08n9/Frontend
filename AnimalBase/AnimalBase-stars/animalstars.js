"use strict";

// Gloabl settings for filter and sorting
const settings = {
  filter: "*",
  sortBy: "name",
  sortDir: "asc",
};
// The prototype for all animals:
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
  star: false,
  winner: false,
};
let allAnimals = [];

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("ready");

  loadJSON();

  document.querySelectorAll(`[data-action="filter"]`).forEach((but) => {
    but.addEventListener("click", selectFilter);
  });
  document.querySelectorAll(`[data-action="sort"]`).forEach((but) => {
    but.addEventListener("click", selectSorting);
  });
}

// - - LOAD THE JSON - -
async function loadJSON() {
  const response = await fetch("animals.json");
  const jsonData = await response.json();

  // when loaded, prepare data objects
  prepareObjects(jsonData);
}

// - - SET FILTER - -
function selectFilter(event) {
  const filter = event.target.dataset.filter;
  console.log(filter);
  setFilter(filter);
}

function setFilter(filter) {
  settings.filter = filter;
  buildList();
}

// - - SET SORT - -
function selectSorting(event) {
  const sortBy = event.target.dataset.sort;
  const sortDir = event.target.dataset.sortDirection;

  const oldElement = document.querySelector(`[data-sort=${settings.sortBy}]`);
  oldElement.classList.remove("sortby");
  oldElement.dataset.sortDirection = "asc";

  event.target.classList.add("sortby");

  console.log(sortBy, sortDir);

  if (sortDir === "asc") {
    event.target.dataset.sortDirection = "desc";
  } else {
    event.target.dataset.sortDirection = "asc";
  }
  setSort(sortBy, sortDir);
}

function setSort(sortBy, sortDir) {
  settings.sortBy = sortBy;
  settings.sortDir = sortDir;
  buildList();
}

// - - BUILD BASED ON SET FILTER AND SORT - -

function buildList() {
  const currentList = filterList(allAnimals);
  const sortedList = sortList(currentList);

  displayList(sortedList);
}

//- - FILTER THE LIST

function filterList(filteredList) {
  if (settings.filter !== "*") {
    filteredList = allAnimals.filter(isAnimal);
  }

  function isAnimal(animal) {
    return animal.type === settings.filter;
  }

  return filteredList;
}

// - - SORT THE LIST - -

function sortList(sortedList) {
  let direction = -1;
  if (settings.sortDir === "desc") {
    direction = -1;
  } else {
    direction = 1;
  }

  let SortedList = sortedList.sort(sortByChoice);

  function sortByChoice(animalA, animalB) {
    if (animalA[settings.sortBy] < animalB[settings.sortBy]) {
      return -1 * direction;
    } else {
      return 1 * direction;
    }
  }
  return SortedList;
}

//***************************************

function prepareObjects(jsonData) {
  allAnimals = jsonData.map(preapareObject);

  buildList();
}

function preapareObject(jsonObject) {
  const animal = Object.create(Animal);

  const texts = jsonObject.fullname.split(" ");
  animal.name = texts[0];
  animal.desc = texts[2];
  animal.type = texts[3];
  animal.age = jsonObject.age;

  return animal;
}

function displayList(animals) {
  // clear the display
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  animals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // set clone data

  // TODO: Show star ⭐ or ☆

  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  if (animal.star === true) {
    clone.querySelector("[data-field=star]").textContent = "⭐";
  } else {
    clone.querySelector("[data-field=star]").textContent = "☆";
  }

  clone.querySelector("[data-field=star]").addEventListener("click", clickStar);

  function clickStar() {
    if (animal.star === true) {
      animal.star = false;
    } else {
      animal.star = true;
    }
    buildList();
  }

  // Winners
  clone.querySelector("[data-field=winner]").dataset.winner = animal.winner;
  clone.querySelector("[data-field=winner]").addEventListener("click", clickWinner);

  function clickWinner() {
    if (animal.winner === true) {
      animal.winner = false;
    } else {
      tryToMakeAWinner(animal);
    }
    buildList();
  }

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}

function tryToMakeAWinner(selectedAnimal) {
  const winners = allAnimals.filter((animal) => animal.winner);
  const numberOfWinners = winners.length;
  const other = winners.filter((animal) => animal.type === selectedAnimal.type).shift();

  if (other !== undefined) {
    console.log(`There can be only one winner of each type!`);
    removeOther(other);
  } else if (numberOfWinners >= 2) {
    console.log(`There can only be two winners.`);
    removeAorB(winners[0], winners[1]);
  } else {
    makeWinner(selectedAnimal);
  }

  function removeOther(other) {
    //Ask if ignore og remove "other"
    document.querySelector("#remove_other").classList.remove("hide");
    document.querySelector("#remove_other .closebutton").addEventListener("click", closeDialog);
    document.querySelector("#remove_otherButton").addEventListener("click", clickRemoveOther);
    document.querySelector("#otherName").textContent = `${other.name} the ${other.type}`;

    //If ignore - do nothing
    function closeDialog() {
      document.querySelector("#remove_other").classList.add("hide");
      document.querySelector("#remove_other .closebutton").removeEventListener("click", closeDialog);
      document.querySelector("#remove_otherButton").removeEventListener("click", clickRemoveOther);
      document.querySelector("#otherName ").textContent = "";
    }

    //If remove other:
    function clickRemoveOther() {
      removeWinner(other);
      makeWinner(selectedAnimal);
      buildList();
      closeDialog();
    }
  }

  function removeAorB(winnerA, winnerB) {
    //Ask if ignore og remove A or B
    document.querySelector("#remove_aorb").classList.remove("hide");
    document.querySelector("#remove_aorb .closebutton").addEventListener("click", closeDialog);
    document.querySelector("#removeA").addEventListener("click", clickRemoveA);
    document.querySelector("#Aoption ").textContent = `${winnerA.name} the ${winnerA.type}`;
    document.querySelector("#removeB").addEventListener("click", clickRemoveB);
    document.querySelector("#Boption ").textContent = `${winnerB.name} the ${winnerB.type}`;

    //if ignore, do nothing
    function closeDialog() {
      document.querySelector("#remove_aorb").classList.add("hide");
      document.querySelector("#remove_aorb .closebutton").removeEventListener("click", closeDialog);
      document.querySelector("#removeA").removeEventListener("click", clickRemoveA);
      document.querySelector("#Aoption ").textContent = "";
      document.querySelector("#removeB").removeEventListener("click", clickRemoveB);
      document.querySelector("#Boption ").textContent = "";
    }

    // if removeA:
    function clickRemoveA() {
      removeWinner(winnerA);
      makeWinner(selectedAnimal);
      buildList();
      closeDialog();
    }
    // else - if removeB:
    function clickRemoveB() {
      removeWinner(winnerB);
      makeWinner(selectedAnimal);
      buildList();
      closeDialog();
    }
  }

  function removeWinner(winnerAnimal) {
    winnerAnimal.winner = false;
  }

  function makeWinner(animal) {
    animal.winner = true;
  }
}
