"use strict";
// Name-parts
// Given a name string, e.g. “Peter Heronimous Lind” - split the string into three variables: firstName, middleName and lastName.
// Hint: use indexOf and substring
// Expect the name to be a const - you can’t modify it.
// Console.log the three variables at the very end of your code.

// Remember that you may not use "magic numbers" in your code, so you have to create the program, so it finds the beginning and end of each part of the name.
// Also test the code with your own name (make up a middle name, if you don't have one) to ensure that it works for different lengths.

// Important: DO NOT look for solutions online - use the MDN documentation, and find the string methods that will help you. This exercise is about solving an unknown problem, not about finding existing solutions.

// Optional:
// If you feel like challenging yourself, try to make the code work when the name string has either two, three or four names.
// Test if it works with
// const name = "Albus Percival Wulfric Brian Dumbledore";
// Where the middleName would end up being "Percival Wulfric Brian".
// You might need to use lastIndexOf in addition to indexOf.

// Hand-in details
// When done, remember to commit the files. - and also paste the js-code as the answer below.

const nameStr = "Peter Heronimous Lind";

const firstName = nameStr.substring(0, nameStr.indexOf(" "));
const middleName = nameStr.substring(nameStr.indexOf(" ") + 1, nameStr.lastIndexOf(" "));
const lastName = nameStr.substring(nameStr.lastIndexOf(" ") + 1);
// const middleName =
// const lastName =

console.log(firstName);
console.log(middleName);
console.log(lastName);
