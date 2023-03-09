"use strict";

document.addEventListener("DOMContentLoaded", countArray);
// create array and add counter === 0
const arr = new Array();
let counter = 0;

// make the function to loop through itself.
function countArray() {
  // if counter <= 8 (9 in total after it is done) then it should just unshift (put in front of array)
  if (counter <= 8) {
    counter++;
    console.log(arr);
    arr.unshift(counter);
    setTimeout(countArray, 1000);

    // if counter > 8 (10 after console.log ) then unshift conter and pop (remove from end of array)
  } else if (counter > 8) {
    counter++;
    arr.unshift(counter);
    arr.pop();
    console.log(arr);
    setTimeout(countArray, 1000);
  } else {
    // But never is >:-)
    console.log("Done");
  }
}
