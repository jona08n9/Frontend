"use strict";

document.addEventListener("DOMContentLoaded", initLoop);

const text1 = document.querySelector("#typewriter");
const text2 = document.querySelector("#typewriter2");
const audioLast = document.querySelector("#typelast");
const audioSpace = document.querySelector("#typespace");
const audioReturn = document.querySelector("#typereturn");

let input1;
let input2;
let ihcheck1;
let ihcheck2;
let maxValue1;
let maxValue2;
let iteration1;
let iteration2;
let randNum;
let speed;

function initLoop() {
  console.log("init");
  audioReturn.currentTime = 0;

  input1 = text1.textContent;
  maxValue1 = input1.length;
  ihcheck1 = text1.innerHTML;
  iteration1 = 0;

  input2 = text2.textContent;
  maxValue2 = input2.length;
  ihcheck2 = text2.innerHTML;
  iteration2 = 0;

  text1.innerHTML = "";
  text2.innerHTML = "";

  console.log(`Input 1 text content: ${input1}`);
  console.log(`Input 1 inner HTML: ${ihcheck1}`);
  console.log(`Input 2 text content: ${input2}`);
  console.log(`Input 2 inner HTML: ${ihcheck2}`);

  document.querySelector("#reset").addEventListener("click", resetType);
  loopThrough();
}

function loopThrough() {
  if (iteration1 < maxValue1 && input1[iteration1] !== " " && ihcheck1.substring(iteration1, iteration1 + 4) !== "<br>") {
    console.log(`Key: ${input1[iteration1]}`);
    text1.innerHTML += `${input1[iteration1]}`;
    iteration1++;
    speed = 700 + Math.floor(Math.random() * 4) * 100;
    randNum = Math.floor(Math.random() * 2) + 1;
    document.querySelector("#typekey" + randNum).play();
    document.querySelector("#typekey" + randNum).currentTime = 0;
    setTimeout(loopThrough, Math.random() * speed);
  } else if (iteration1 < maxValue1 && input1[iteration1] === " ") {
    console.log(`Space`);
    text1.innerHTML += `${input1[iteration1]}`;
    iteration1++;
    audioSpace.play();
    audioSpace.currentTime = 0;
    speed = 700 + Math.floor(Math.random() * 4) * 100;
    console.log(speed);
    setTimeout(loopThrough, Math.random() * speed);
  } else if (iteration1 < maxValue1 && ihcheck1.substring(iteration1, iteration1 + 4) === "<br>") {
    console.log(`Line Break`);
    text1.innerHTML += `<br>`;
    iteration1++;
    audioReturn.play();
    setTimeout(loopThrough, 1500);
  } else {
    console.log("done");
    audioReturn.play();
    audioReturn.addEventListener("ended", initloopThroughSecond);
  }
}

function initloopThroughSecond() {
  if (input2 === "") {
    console.log("Done");
  } else {
    loopThroughSecond();
  }
}

function loopThroughSecond() {
  if (iteration2 < maxValue2 && input2[iteration2] !== " " && ihcheck2.substring(iteration2, iteration2 + 4) !== "<br>") {
    console.log(`Key: ${input2[iteration2]}`);
    text2.innerHTML += `${input2[iteration2]}`;
    iteration2++;
    speed = 700 + Math.floor(Math.random() * 4) * 100;
    randNum = Math.floor(Math.random() * 2) + 1;
    document.querySelector("#typekey" + randNum).play();
    document.querySelector("#typekey" + randNum).currentTime = 0;
    setTimeout(loopThroughSecond, Math.random() * speed);
  } else if (iteration2 < maxValue2 && input2[iteration2] === " ") {
    console.log(`Space`);
    text2.innerHTML += `${input2[iteration2]}`;
    iteration2++;
    audioSpace.play();
    audioSpace.currentTime = 0;
    speed = 700 + Math.floor(Math.random() * 4) * 100;
    console.log(speed);
    setTimeout(loopThroughSecond, Math.random() * speed);
  } else if (iteration2 < maxValue2 && ihcheck2.substring(iteration2, iteration2 + 4) === "<br>") {
    console.log(`Line Break`);
    text2.innerHTML += `<br>`;
    iteration2++;
    audioReturn.play();
    setTimeout(loopThroughSecond, 1500);
  } else {
    console.log("done");
  }
}

function resetType() {
  audioReturn.removeEventListener("ended", initloopThroughSecond);
  audioReturn.addEventListener("ended", resetLoop);
  audioReturn.play();
}

function resetLoop() {
  audioReturn.removeEventListener("ended", resetLoop);
  audioReturn.pause();
  audioReturn.currentTime = 0;
  initLoop();
}
