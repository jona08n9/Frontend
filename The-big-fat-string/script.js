"use strict";

document.addEventListener("DOMContentLoaded", loadEL);

const btn = document.querySelector("#process");
const output = document.querySelector("#output");
const pW = "*";
const hyp = "-";
const letter = " " + 1;

let input;
let option;
let string;
let inputArray;
let upArray;
let final8;
let final8Hyphen;
let saveInput;

function loadEL() {
  btn.addEventListener("click", editInput);
}

function editInput() {
  console.log("Check1");
  //Take the value from the input field
  input = document.querySelector("#input").value;
  option = Number(document.querySelector("#string-option").value);

  //Check which string edit to do
  if (option === 1) {
    // If input is a first name: Make the first character in a name uppercase, and the rest lowercase
    console.log(`Option 1 chosen`);
    output.value = `${input.charAt(0).toUpperCase()}${input.slice(1).toLowerCase()}`;
  } else if (option === 2) {
    // If input is a full name: Find the first name
    console.log(`Option 2 chosen`);
    output.value = input.substring(0, input.indexOf(" "));
  } else if (option === 3) {
    // If input is a full name: Find the length of the first name
    console.log(`Option 3 chosen`);
    output.value = `The first names length is: ${input.substring(0, input.indexOf(" ")).length}`;
  } else if (option === 4) {
    //If input is a full name: Find the middle name start and end position, and the middle name itself in a full name string
    console.log(`Option 4 chosen`);
    console.log(input.indexOf(" "));
    output.value = `The middle name is "${input.substring(input.indexOf(" ") + 1, input.lastIndexOf(" "))}". It starts at index ${input.indexOf(" ") + 1} and ends at index ${input.lastIndexOf(" ") - 1}.`;
  } else if (option === 5) {
    // If input is a filename: Check if a filename is .png or .jpg
    console.log(`Option 5 chosen`);
    if (input.endsWith(".png")) {
      output.value = `This is a .png file.`;
    } else if (input.endsWith(".jpg")) {
      output.value = "This is a .jpg file.";
    } else {
      output.value = "The file is neither a .png or .jpg.";
    }
  } else if (option === 6) {
    // If input is a password: Hide a password with the correct number of *s
    console.log(`Option 6 chosen`);
    output.value = `${pW.repeat(input.length)} (This passwords length is ${input.length} stars :-))`;
  } else if (option === 7) {
    // With any input: Make the third character uppercase
    console.log(`Option 7 chosen`);
    output.value = `${input.substring(0, 2).toLowerCase()}${input.substring(2, 3).toUpperCase()}${input.substring(3).toLowerCase()}`;
  } else {
    // We'll make three "if/else" to check if:
    //1) Sentence includes space and hyphen
    //2) Sentence includes only hyphen
    //3) Sentence invludes only space

    // 1st If statement:
    if (input.includes(" ") === true && input.includes("-") === true) {
      console.log(`Option 8 with " " and "-" chosen`);
      //Split the string into an array where the seperator is spaces.
      inputArray = input.split(" ");
      //Use .map to uppercase every first caracter. Since we seperated the words by the spaces, we know that the first letter must be after a space.
      upArray = inputArray.map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`);
      //Make the first item in the array to lowercase --> Because it is the beginning and not following a space
      upArray[0] = upArray[0].toLowerCase();
      //Join the array with spaces and turn to string
      final8 = upArray.join(" ").toString();

      // Now check for the hyphens.
      //Split the string into an array where the seperator is hyphends.
      final8 = final8.split("-");
      //Save the first item and remove from final8 with .shift.
      saveInput = final8.shift();
      //Map the rest of the array. Since we seperated the words by the hyphen, we know that the first letter must be after a hyphen.
      final8 = final8.map((word) => `-${word.charAt(0).toUpperCase()}${word.slice(1)}`);
      //Unshift to saved input, so it is the first item in the array
      final8.unshift(saveInput);
      // join without spaces
      final8 = final8.join("").toString();

      output.value = final8;

      //2nd if statement
    } else if (input.includes("-") === true) {
      console.log(`Option 8 with "-" chosen`);
      //Split the string into an array where the seperator is hyphends.
      inputArray = input.split("-");
      //Save the first item and remove from final8 with .shift. Then make the saved item to lowercase --> Because it is the beginning and not following a space
      saveInput = inputArray.shift();
      saveInput = saveInput.toLowerCase();

      //Map the rest of the array. Since we seperated the words by the hyphen, we know that the first letter must be after a hyphen.
      upArray = inputArray.map((word) => `-${word.charAt(0).toUpperCase()}${word.slice(1).trimEnd()}`);
      //Unshift to saved input, so it is the first item in the array
      upArray.unshift(saveInput);
      // join without spaces
      final8 = upArray.join("").toString();

      output.value = final8;
    } else if (input.includes(" ") === true) {
      console.log(`Option 8 with " " chosen`);
      //Split the string into an array where the seperator is spaces.
      inputArray = input.split(" ");
      //Use .map to uppercase every first caracter. Since we seperated the words by the spaces, we know that the first letter must be after a space.
      upArray = inputArray.map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`);
      //Make the first item in the array to lowercase --> Because it is the beginning and not following a space
      upArray[0] = upArray[0].toLowerCase();
      //Join the array with spaces and turn to string
      final8 = upArray.join(" ").toString();

      output.value = final8;
    }

    // Or... just do this... fml...:
    //   final8 = "";
    //   Array.from(input.value).forEach((letter, i) => {
    //     if (input.value[i - 1] === " " || input.value[i - 1] === "-") {
    //       final8 += input.value[i].toUpperCase();
    //     } else {
    //       final8 += input.value[i];
    //     }
    // });
  }

  loadEL();
}
