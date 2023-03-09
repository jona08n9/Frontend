"use strict";

document.addEventListener("DOMContentLoaded", addEL);

function addEL() {
  const button1 = document.querySelector("#knap1");
  const button2 = document.querySelector("#knap2");
  const button3 = document.querySelector("#knap3");
  const button4 = document.querySelector("#knap4");
  const button5 = document.querySelector("#knap5");
  const button6 = document.querySelector("#knap6");
  const button7 = document.querySelector("#knap7");
  button1.addEventListener("click", forLoop1);
  button2.addEventListener("click", forLoop2);
  button3.addEventListener("click", forLoop3);
  button4.addEventListener("click", forLoop4);
  button5.addEventListener("click", forLoop5);
  button6.addEventListener("click", forLoop6);
  button7.addEventListener("click", forLoop7);
}

function forLoop1() {
  console.log("Loop 1 - From 0 to 9");
  //     From 0 to 9
  for (let counter = 0; counter < 9; counter++) {
    console.log(counter);
  }
}

function forLoop2() {
  console.log("Loop 1 - From 1 to 10");
  //     From 1 to 10
  for (let counter = 1; counter <= 10; counter++) {
    console.log(counter);
  }
}

function forLoop3() {
  console.log("Loop 1 - From 10 to 0 and after 0 it console.logs 'Liftoff!'");
  //     From 10 to 0 and after 0 it console.logs "Liftoff!"
  for (let counter = 10; counter >= 0; counter--) {
    console.log(counter);
  }
  console.log("Liftoff!");
}

function forLoop4() {
  console.log("Loop 1 - From 1 to 19 but only counts odd numbers");
  //     From 1 to 19 but only counts odd numbers
  for (let counter = 1; counter <= 19; counter += 2) {
    console.log(counter);
  }
}

function forLoop5() {
  console.log("Loop 1 - From 1 to 16777216, but doubling each time");
  //     From 1 to 16777216, but doubling each time
  for (let counter = 1; counter <= 16777216; counter *= 2) {
    console.log(counter);
  }
}

function forLoop6() {
  console.log("Loop 1 - From 111 to 138 in steps of 3");
  //     From 111 to 138 in steps of 3
  for (let counter = 111; counter <= 138; counter += 3) {
    console.log(counter);
  }
}

function forLoop7() {
  console.log("Loop 1 -From 100 down to 0 in 10 steps");
  //     From 100 down to 0 in 10 steps
  for (let counter = 100; counter >= 0; counter -= 10) {
    console.log(counter);
  }
}
