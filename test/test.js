"use strict";

// function greeting(firstname) {
//   console.log(`Hello ${firstname}`);
// }

// const sayHello = greeting;

// sayHello("Harry");

// ********************************

// const person3 = {
//   firstName: "Harry",
//   lastName: "Potter",
//   hired: false,
// };
// const person4 = {
//   firstName: "Fred",
//   lastName: "Weasly",
//   hired: false,
// };

// console.log(person3);
// console.log(person4);

// function hire(person) {
//   person.hired = true;
// }
// function fire(person) {
//   person.hired = false;
// }
// function fireOrHire(action, person) {
//   action(person);
// }

// fireOrHire(hire, person4);
// fireOrHire(fire, person3);

// console.table(person3);
// console.table(person4);
//************************************************

// function init() {
//   console.log("init");
//   loadJSON("https://petlatkea.dk/2021/hogwarts/students.json", callback);
// }

// function loadJSON(url, callback) {
//   fetch(url)
//     .then((response) => response.json())
//     .then((jsonData) => callback(jsonData));
// }

// //OR
// //
// async function loadJSON(url, callback) {
//   const response = await fetch(url);
//   const jsonData = await response.json();
//   callback(jsonData);
// }

// function callback(data) {
//   console.log("Prepare data");
//   console.table(data);
// }

// console.log('Just write "init()" in the consol.');

//************************************************

// const people = ["Harry", "Ron", "Hermione", "Neville"];

// function sayHello(person) {
//   console.log(`Hello ${person}`);
// }

// people.forEach(sayHello);

//************************************************

// const people = ["Harry", "Ron", "Hermione", "Neville", "Draco"];

// function testParam(a, b, c, d, e) {
//   console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}, e: ${e}`);
// }

// people.forEach(testParam);

// console.log("This shows us, that a for each loop has 3 parameters it looks through: a = The object, b = the index of the object, c = The whole array, d (+ n) = nothing, therfore 'undefined'.");

//************************************************

// const animals = [
//   { name: "Peter", type: "cat" },
//   { name: "Søren", type: "cat" },
//   { name: "John", type: "hund" },
//   { name: "Lars", type: "cat" },
//   { name: "Bob", type: "hund" },
//   { name: "Lars2", type: "hund" },
// ];

// // function all(aninal) {
// //   return true;
// // }
// // function none(animal) {
// //   return false;
// // }

// const onlyCats = animals.filter(isCat);

// function isCat(animal) {
//   if (animal.type === "cat") {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(onlyCats);

// console.log("ALL", animals.filter(all));
// console.log("NONE", animals.filter(none));
//************************************************

// const people = ["Harry", "Ron", "Hermione", "Neville", "Draco"];

// people.sort();

// console.log(people);

//************************************************

//INSERT CODE HERE

console.log(isLeapYear(2020));

// function isLeapYear(year) {
//   if (year % 4 === 0 && year % 100 !== 0) {
//     console.log(`Year: ${year}`);
//     console.log(`${year % 4}, ${year % 100}`);
//     return true;
//   } else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
//     console.log(`Year: ${year}`);
//     console.log(`${year % 4}, ${year % 100}, ${year % 400}`);
//     return true;
//   } else if (year % 4 === 0 && year % 100 === 0 && year % 400 !== 0) {
//     console.log(`Year: ${year}`);
//     console.log(`${year % 4}, ${year % 100}, ${year % 400}`);
//     return false;
//   } else {
//     console.log(`Year: ${year}`);
//     console.log(`${year % 4}, ${year % 100}, ${year % 400}`);
//     return false;
//   }
// }

function isLeapYear(year) {
  let leapFlag = false;
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return (leapFlag = true);
      }
    } else {
      return (leapFlag = true);
    }
  }
  return leapFlag;
}

//************************************************
