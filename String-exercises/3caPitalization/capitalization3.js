"use strict";

// Given a single name string in an unknown case, e.g. “peter” or “PETER” - create a new string with the same name, where the third letter is uppercase, and the rest is lowercase. I.e. “peTer”.
// Hint: use substring, toUpperCase, toLowerCase and simple string concatenation

// Test your code with various crazy combinations of your own name, like “pETer”, “PEter”, “peteR”, “PEtER” and so on.
// Make sure that it also works with longer names. Don't worry about names shorter than 3 characters.

// Important: DO NOT look for solutions online - use the MDN documentation, and find the string methods that will help you. This exercise is about solving an unknown problem, not about finding existing solutions.

// When complete, add, commit, and also paste the js-code here below.

const nameStr = "Jonas";

let Cap3 = `${nameStr.substring(0, 2).toLowerCase()}${nameStr.substring(2, 3).toUpperCase()}${nameStr.substring(3).toLowerCase()}`;

console.log(Cap3);
