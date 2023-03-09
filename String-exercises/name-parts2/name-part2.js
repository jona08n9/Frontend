"use strict";

// Find the old code you made to split a string into three variables: firstName, middleName and lastName, and put it inside a function named getNameParts( fullname ), where fullname is the parameter, the string you want to split up.

// Use your original code with indexOf and substring, don't "cheat" and use .split()!

// Make sure that the function creates three new strings: firstName, middleName and lastName. Console.log them at the end of the function. You can console.log them as an object to make it easier, like console.log( { firstName, middleName, lastName } );

// Test the function by calling it with various combinations of names with no, one, two or more middle names.

// For an extra challenge, fix it so that the middleName is either null or undefined, if there were no middle name in the fullname!

function getNameParts(fullname) {
  let firstName = fullname.substring(0, fullname.indexOf(" "));

  let middleName;
  if (fullname.substring(fullname.indexOf(" ") + 1, fullname.lastIndexOf(" ")) === " ") {
    middleName = undefined;
  } else {
    middleName = fullname.substring(fullname.indexOf(" ") + 1, fullname.lastIndexOf(" "));
  }
  let lastName = fullname.substring(fullname.lastIndexOf(" ") + 1);

  console.log(`First name : ${firstName}`);
  console.log(`Middle name  :${middleName}`);
  console.log(`Last name : ${lastName}`);
  console.log(`Full name : ${firstName} ${middleName} ${lastName}`);
}
