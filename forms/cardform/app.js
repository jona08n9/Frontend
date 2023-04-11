"use strict";

const kortNummer = document.querySelector("#card-number");
const kortMonth = document.querySelector("#card-month");
const kortYear = document.querySelector("#card-year");
const kortCVR = document.querySelector("#card-cvr");

kortNummer.addEventListener("input", () => {
  //   console.log(kortNummer.value.length);
  if (kortNummer.value.length === 16) {
    document.querySelector("#card-number ~ input").focus();
  }
});

kortMonth.addEventListener("input", () => {
  //   console.log(kortNummer.value.length);
  if (kortMonth.value.length === 2) {
    document.querySelector("#card-month ~ input").focus();
  }
});

kortYear.addEventListener("input", () => {
  //   console.log(kortNummer.value.length);
  if (kortYear.value.length === 2) {
    document.querySelector("#card-year ~ input").focus();
  }
});

kortCVR.addEventListener("input", () => {
  //   console.log(kortNummer.value.length);
  if (kortCVR.value.length === 3) {
    document.querySelector("#card-cvr").blur();
  }
});
