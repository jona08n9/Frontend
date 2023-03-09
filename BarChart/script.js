"use strict";

document.addEventListener("DOMContentLoaded", loadComponents);

let costumers = new Array();

function loadComponents() {
  //Generate random 40 length array
  for (let i = 0; i < 40; i++) {
    getNumberOfCostumers();
    const costumerNumber = getNumberOfCostumers();
    costumers.push(costumerNumber);
  }
  //Add event listener to button.
  document.querySelector("button").addEventListener("click", startBarChart);
  document.querySelectorAll(".bar").forEach((div) => {
    div.addEventListener("mouseover", showNumber);
  });
  console.log(costumers);
}

// // --- START BAR CHART - REGURLAR (Added XXX since this is not running, but want to keep it)
function XXXstartBarChart() {
  // Add the height to the 40 divs, so it shows the bars with the initial array
  for (let i = 0; i < 40; i++) {
    document.querySelector(".bar--" + Number(i)).style.height = `${costumers[i]}px`;
    console.log(costumers[i]);
  }
  //begin the loop
  beginLoop();
}

// -- START BAR CHART - GREEN COLOR
function startBarChart() {
  // Add the height + color to the 40 divs, so it shows the bars with the initial array
  for (let i = 0; i < 40; i++) {
    //Depending on the number, the bar gets a darker color if its "older" in the array (near start)
    if (i < 5) {
      document.querySelector(".bar--" + Number(i)).style.height = `${costumers[i]}px`;
      document.querySelector(".bar--" + Number(i)).style.backgroundColor = `#004B23`;
      console.log(costumers[i]);
    } else if (i < 10) {
      document.querySelector(".bar--" + Number(i)).style.height = `${costumers[i]}px`;
      document.querySelector(".bar--" + Number(i)).style.backgroundColor = `#006400`;
      console.log(costumers[i]);
    } else if (i < 15) {
      document.querySelector(".bar--" + Number(i)).style.height = `${costumers[i]}px`;
      document.querySelector(".bar--" + Number(i)).style.backgroundColor = `#007200`;
      console.log(costumers[i]);
    } else if (i < 20) {
      document.querySelector(".bar--" + Number(i)).style.height = `${costumers[i]}px`;
      document.querySelector(".bar--" + Number(i)).style.backgroundColor = `#008000`;
      console.log(costumers[i]);
    } else if (i < 25) {
      document.querySelector(".bar--" + Number(i)).style.height = `${costumers[i]}px`;
      document.querySelector(".bar--" + Number(i)).style.backgroundColor = `#38B000`;
      console.log(costumers[i]);
    } else if (i < 30) {
      document.querySelector(".bar--" + Number(i)).style.height = `${costumers[i]}px`;
      document.querySelector(".bar--" + Number(i)).style.backgroundColor = `#70E000`;
      console.log(costumers[i]);
    } else if (i < 35) {
      document.querySelector(".bar--" + Number(i)).style.height = `${costumers[i]}px`;
      document.querySelector(".bar--" + Number(i)).style.backgroundColor = `#9EF01A`;
      console.log(costumers[i]);
    } else {
      document.querySelector(".bar--" + Number(i)).style.height = `${costumers[i]}px`;
      document.querySelector(".bar--" + Number(i)).style.backgroundColor = `#CCFF33`;
      console.log(costumers[i]);
    }
  }

  document.querySelectorAll(".bar").forEach((div) => {
    div.classList.add("animation");
  });
  //begin the loop
  beginLoop();
}

function beginLoop() {
  console.log("Go Looping!");
  //Set the timeout to 1s (1000ms)
  // setTimeout(modifyData, 1000);
  document.querySelector(".bar").addEventListener("animationiteration", modifyData);
}

function modifyData() {
  //shift index[0]
  costumers.shift();
  //load the random number
  getNumberOfCostumers();
  const costumerNumber = getNumberOfCostumers();
  //push the random number in the end of array
  costumers.push(costumerNumber);
  //Run the function to display the data
  displayData();
}

// // --- DISPLAY REGULAR DATA --- Added "XXX" so it is not being used, but still there
function XXXdisplayData() {
  // Add the height to the 40 divs, so it shows the bars with the initial array
  for (let i = 0; i < 40; i++) {
    document.querySelector(".bar--" + Number(i)).style.height = `${costumers[i]}px`;
    console.log(costumers[i]);
  }
  //Call the beginLoop, that has the setTimeout so the repeated input of bars happens every 1000 ms
  beginLoop();
}

// --- DISPLAY DARK GREEN OLDEST DATA, LIGTER GREEN NEWER DATA ---
function displayData() {
  // Add the height to the 40 divs, so it shows the bars with the initial array
  for (let i = 0; i < 40; i++) {
    if (i < 5) {
      document.querySelector(".bar--" + Number(i)).style.height = `${costumers[i]}px`;
      document.querySelector(".bar--" + Number(i)).style.backgroundColor = `#004B23`;
      console.log(costumers[i]);
    } else if (i < 10) {
      document.querySelector(".bar--" + Number(i)).style.height = `${costumers[i]}px`;
      document.querySelector(".bar--" + Number(i)).style.backgroundColor = `#006400`;
      console.log(costumers[i]);
    } else if (i < 15) {
      document.querySelector(".bar--" + Number(i)).style.height = `${costumers[i]}px`;
      document.querySelector(".bar--" + Number(i)).style.backgroundColor = `#007200`;
      console.log(costumers[i]);
    } else if (i < 20) {
      document.querySelector(".bar--" + Number(i)).style.height = `${costumers[i]}px`;
      document.querySelector(".bar--" + Number(i)).style.backgroundColor = `#008000`;
      console.log(costumers[i]);
    } else if (i < 25) {
      document.querySelector(".bar--" + Number(i)).style.height = `${costumers[i]}px`;
      document.querySelector(".bar--" + Number(i)).style.backgroundColor = `#38B000`;
      console.log(costumers[i]);
    } else if (i < 30) {
      document.querySelector(".bar--" + Number(i)).style.height = `${costumers[i]}px`;
      document.querySelector(".bar--" + Number(i)).style.backgroundColor = `#70E000`;
      console.log(costumers[i]);
    } else if (i < 35) {
      document.querySelector(".bar--" + Number(i)).style.height = `${costumers[i]}px`;
      document.querySelector(".bar--" + Number(i)).style.backgroundColor = `#9EF01A`;
      console.log(costumers[i]);
    } else {
      document.querySelector(".bar--" + Number(i)).style.height = `${costumers[i]}px`;
      document.querySelector(".bar--" + Number(i)).style.backgroundColor = `#CCFF33`;
      console.log(costumers[i]);
    }
  }
  //Call the beginLoop, that has the setTimeout so the repeated input of bars happens every 1000 ms
  beginLoop();
}

function getNumberOfCostumers() {
  // With the "return" the function that calls this function keep this random number value and can use it
  return Math.floor(Math.random() * 32) + 1;
}

//Function to show the number on hover
function showNumber() {
  let divHeight = this.style.height;
  document.querySelector("#hoverNumber").textContent = divHeight.substring(0, divHeight.indexOf("p"));
  console.log(divHeight.substring(0, divHeight.indexOf("p")));
}
