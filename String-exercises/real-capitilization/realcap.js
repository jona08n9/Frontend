"use strict";

// Use the 3caPitalization exercise as a basis for this exercise. Modify the code, so that only the first letter is upper case, and the rest is lower case.
// Make sure that it can take names of any length!

// Important: DO NOT look for solutions online - use the MDN documentation, and find the string methods that will help you. This exercise is about solving an unknown problem, not about finding existing solutions.
// When complete, add, commit, and also paste the js-code here below.

const nameStr = "Jonas";

let rCap = `${nameStr.substring(0, 1).toUpperCase()}${nameStr.substring(1).toLowerCase()}`;

console.log(rCap);
