"use strict";

// Fullname function
// Create a function called fullName, that receives three parameters:
// lastName, firstName, and middleName (in that order!)

// The function should combine the three names into a new string, the full name, with a single space between each, but ignoring the middleName completely if it wasn't given.

// The function should write the new string to the console.

// Test the function with these combinations:

// fullName("Potter", "Harry", "James"); should console.log "Harry James Potter"

// fullName("Potter", "Harry"); should console.log "Harry Potter"

// fullName("Harry", "Potter"); should console.log "Potter Harry"

// fullName("Potter", "Harry", "James", "Pottypotpot"); should console.log "Harry James Potter"

// Make sure there aren't extra spaces when there is no middleName.

// Try to call this function directly from within the getNameParts function, and observe if you get the same result as the original parameter to nameParts! - this is only a temporary test, you should comment-out the function call afterwards!

// let lameName = "Harry James Potter";

// function getNameParts(lameName) {
//   let firstName;
//   let lastName;
//   let middleName;
//   if (lameName.split(" ").length < 3) {
//     console.log(lameName.split(" ").length);
//     firstName = lameName.substring(0, lameName.indexOf(" "));
//     lastName = lameName.substring(lameName.lastIndexOf(" ") + 1);
//     middleName = undefined;
//   } else {
//     console.log("ey");
//     firstName = lameName.substring(0, lameName.indexOf(" "));
//     lastName = lameName.substring(lameName.lastIndexOf(" ") + 1);
//     middleName = lameName.substring(lameName.indexOf(" ") + 1, lameName.lastIndexOf(" "));
//   }

//   fullName(lastName, firstName, middleName);
// }

// function fullName(lastName, firstName, middleName) {
//   if (middleName === undefined) {
//     console.log(`Full name: ${firstName} ${lastName}`);
//   } else {
//     console.log(`Full name: ${firstName} ${middleName} ${lastName}`);
//   }
// }

let lameName = "Harry James";

let theName = getNameParts(lameName);

function getNameParts(str) {
  if (str.split(" ").length < 3) {
    let firstName = str.substring(0, str.indexOf(" "));
    let lastName = str.substring(str.lastIndexOf(" ") + 1);
    return `${lastName} ${firstName}`;
  } else {
    let firstName = str.substring(0, str.indexOf(" "));
    let lastName = str.substring(str.lastIndexOf(" ") + 1);
    let middleName = str.substring(str.indexOf(" ") + 1, str.lastIndexOf(" "));
    return `${lastName} ${firstName} ${middleName}`;
  }
}
console.log(theName);
