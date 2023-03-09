"use strict";

const calculate = document.querySelector("#calculate");
const clear = document.querySelector("#clear");
const resultList = document.querySelector("#results");

let firstInput;
let secondInput;
let fieldO;
let result;
let resultR;
let latestResult;
let createLi;
let textResult;
let roundingYN;
let roundingValue;

window.addEventListener("DOMContentLoaded", loadContent);

//Add event listener to calculation and clear buttons
function loadContent() {
  console.log("Loaded and ready to go.");

  calculate.addEventListener("click", startCalculation);
  clear.addEventListener("click", clearResults);
}

//Start the calculation!
function startCalculation() {
  console.log("Start calculation");

  //Read the value from the input fields and turn them to numbers
  let firstInput = Number(document.querySelector("#firstnumber").value);
  let secondInput = Number(document.querySelector("#secondnumber").value);
  let roundingYN = document.querySelector("#doround").checked;
  let roundingValue = Number(document.querySelector("#decimals").value);
  let fieldO = document.querySelector("#operator").value;

  //Operate the two numbers

  if (roundingYN === false) {
    if (fieldO === "add") {
      console.log(firstInput + secondInput);
      result = firstInput + secondInput;
    } else if (fieldO === "sub") {
      console.log(firstInput - secondInput);
      result = firstInput - secondInput;
    } else if (fieldO === "mul") {
      console.log(firstInput * secondInput);
      result = firstInput * secondInput;
    } else {
      console.log(firstInput / secondInput);
      result = firstInput / secondInput;
    }
  } else {
    if (fieldO === "add") {
      console.log(firstInput + secondInput);
      resultR = firstInput + secondInput;
      result = resultR.toFixed(roundingValue);
    } else if (fieldO === "sub") {
      console.log(firstInput - secondInput);
      resultR = firstInput - secondInput;
      result = resultR.toFixed(roundingValue);
    } else if (fieldO === "mul") {
      console.log(firstInput * secondInput);
      resultR = firstInput * secondInput;
      result = resultR.toFixed(roundingValue);
    } else {
      console.log(firstInput / secondInput);
      resultR = firstInput / secondInput;
      result = resultR.toFixed(roundingValue);
    }
  }

  document.querySelector("#firstnumber").value = result;

  //Throw the result into the result champer of secrets.
  // 1) Create an <li>
  // 2) insert the reusult
  // 3) create the child with result
  // 4) insert it to the ul
  createLi = document.createElement("li");
  textResult = document.createTextNode(result);
  createLi.appendChild(textResult);
  resultList.appendChild(createLi);

  //Scroll to bottom of results
  resultList.scrollTo(0, 10000000);
}

function clearResults() {
  console.log("Clear calculator");

  //Take the last result before deleting all results
  latestResult = resultList.lastChild.innerHTML;

  console.log(latestResult);

  //Remove all content inside ul
  resultList.innerHTML = "";

  //Add a new li with the latest result
  createLi = document.createElement("li");
  textResult = document.createTextNode(latestResult);
  createLi.appendChild(textResult);
  resultList.appendChild(createLi);
}
