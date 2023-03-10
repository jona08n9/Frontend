"use strict";

const studentURL = "https://petlatkea.dk/2021/hogwarts/students.json";
const bloodURL = "https://petlatkea.dk/2021/hogwarts/families.json";
let allStudents = [];
let grawpList;
let bloodList;
let hackedArray = [];
let id = -1;

//HOUSE COUNTERS
let gryfNum, huffNum, raveNum, slytNum;

const settings = {
  filterBy: "all",
  filterType: "all",
  sortBy: "name",
  sortDir: "desc",
};

window.addEventListener("DOMContentLoaded", loadPage);

function loadPage() {
  console.log("Page loaded");
  addWindowListeners();
  addDocumentListeners();
  getStudents(studentURL, bloodURL);
}

async function getStudents(url1, url2) {
  const studentListURL = await fetch(url1);
  const bloodListURL = await fetch(url2);
  grawpList = await studentListURL.json();
  bloodList = await bloodListURL.json();
  cleanGrawpList();
}

function addDocumentListeners() {
  document.querySelector("#filter__container option").addEventListener("click", selectFilter);
  document.querySelectorAll("#filter__container optgroup option").forEach((option) => {
    option.addEventListener("click", selectFilter);
  });
  document.querySelectorAll('[data-action="sort"]').forEach((option) => {
    option.addEventListener("click", selectSorting);
  });
  document.querySelector(".span__direction").textContent = `${settings.sortDir.charAt(0).toUpperCase()}${settings.sortDir.slice(1).toLowerCase()}`;

  document.addEventListener("keydown", initHacked);
}

// LISTEN TO WINDOW REZISE
function addWindowListeners() {
  window.addEventListener("resize", mobileOrDesktop);
  mobileOrDesktop();
}
function mobileOrDesktop() {
  if (window.innerWidth > 768) {
    document.querySelector(".collapsible").classList.add("hidden");
  } else {
    document.querySelector(".collapsible").classList.remove("hidden");
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        document.querySelector(".colapseSpan").classList.toggle("open");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
  }
}

// CLEAN LIST FROM GRAWP
function cleanGrawpList() {
  grawpList.forEach((grawp) => {
    // TODO: Create new object with cleaned data - and store that in the allAnimals array

    const Student = {
      id: "",
      firstname: "",
      lastname: "",
      middlename: "none",
      gender: "",
      nickname: "none",
      image: "none",
      blood: "",
      house: "",
      prefect: false,
      inquisitorial: false,
      expelled: false,
    };

    id++;

    const student = Object.create(Student);

    //Trim fullname
    const nameTrim = grawp.fullname.trim().split(" ");

    student.id = id;
    student.firstname = getFirstName(nameTrim);
    student.middlename = getMiddleName(nameTrim);
    student.nickname = getNickName(nameTrim);
    student.lastname = getLastName(nameTrim);
    student.gender = getGender(grawp);
    student.image = getStudentImage(nameTrim);
    student.house = getStudentHouse(grawp);
    student.blood = getStudentBlood(student.lastname);
    allStudents.push(student);
  });

  displayCleanStudentList(allStudents);
  checkStudentNumbers(allStudents);
}

//CHECK STUDENT NUMBERS
function checkStudentNumbers(students) {
  gryfNum = 0;
  huffNum = 0;
  raveNum = 0;
  slytNum = 0;

  for (let i = 0; i < students.length; i++) {
    let student = students[i];

    if (student.expelled === false && student.house === "Gryffindor") {
      gryfNum++;
      // console.log(`G=${gryfNum}`);
    } else if (student.expelled === false && student.house === "Hufflepuff") {
      huffNum++;
      // console.log(`H=${huffNum}`);
    } else if (student.expelled === false && student.house === "Ravenclaw") {
      raveNum++;
      // console.log(`R=${raveNum}`);
    } else if (student.expelled === false && student.house === "Slytherin") {
      slytNum++;
      // console.log(`S=${slytNum}`);
    }
  }
  insertStudentNumbers();
}
function insertStudentNumbers() {
  // console.log(`G=${gryfNum}, H=${huffNum}, R=${raveNum}, S=${slytNum}`);
  document.querySelector(".student-number__header--number").textContent = gryfNum + huffNum + raveNum + slytNum;
  document.querySelector(".student-house__container.gryffindor .student-house__number").textContent = gryfNum;
  document.querySelector(".student-house__container.hufflepuff .student-house__number").textContent = huffNum;
  document.querySelector(".student-house__container.ravenclaw .student-house__number").textContent = raveNum;
  document.querySelector(".student-house__container.slytherin .student-house__number").textContent = slytNum;
}

// FUNCRTIONS FOR NAMES, IMAGES, HOUSE, GENDER
function getFirstName(name) {
  return `${name[0].charAt(0).toUpperCase()}${name[0].slice(1).toLowerCase()}`;
}

function getMiddleName(name) {
  if (name.length <= 2) {
    return `N/A`;
  } else {
    if (name[1].includes(`"`) === true) {
      return `N/A`;
    } else {
      return `${name[1].charAt(0).toUpperCase()}${name[1].slice(1).toLowerCase()}`;
    }
  }
}

function getNickName(name) {
  if (name.length === 1) {
    return `N/A`;
  } else if (name.length > 1) {
    if (name[1].includes(`"`) !== true) {
      return `N/A`;
    } else {
      return `${name[1].substring(1, 2).toUpperCase()}${name[1].substring(2, name[1].lastIndexOf('"')).toLowerCase()}`;
    }
  }
}

function getLastName(name) {
  if (name.length === 1) {
    return `N/A`;
  } else {
    if (name[1].includes("-")) {
      let sepLastName = name[1].split("-");
      return `${sepLastName[0].charAt(0).toUpperCase()}${sepLastName[0].slice(1).toLowerCase()}-${sepLastName[1].charAt(0).toUpperCase()}${sepLastName[1].slice(1).toLowerCase()}`;
    } else {
      const trimName = name[name.length - 1];
      return `${trimName.charAt(0).toUpperCase()}${trimName.slice(1).toLowerCase()}`;
    }
  }
}

function getGender(person) {
  return `${person.gender.charAt(0).toUpperCase()}${person.gender.slice(1).toLowerCase()}`;
}

function getStudentImage(name) {
  let trimName = name[name.length - 1];
  if (name.length === 1) {
    return `N/A`;
  } else if (name[1] === "Patil") {
    return `${trimName.toLowerCase()}_${name[0].toLowerCase()}.png`;
  } else {
    if (name[1].includes("-")) {
      let sepName = trimName.split("-");
      return `${sepName[sepName.length - 1].toLowerCase()}_${name[0].charAt(0).toLowerCase()}.png`;
    } else {
      //Last name fix
      return `${trimName.toLowerCase()}_${name[0].charAt(0).toLowerCase()}.png`;
    }
  }
}

function getStudentHouse(person) {
  const houseTrim = person.house.trim();
  return `${houseTrim.charAt(0).toUpperCase()}${houseTrim.slice(1).toLowerCase()}`;
}

function getStudentBlood(person) {
  let bloodStat = runBloodTest(person);

  function runBloodTest(lastname) {
    if (bloodList.half.includes(lastname) && bloodList.pure.includes(lastname)) {
      return `Half`;
    } else if (bloodList.half.includes(lastname)) {
      return `Half`;
    } else if (bloodList.pure.includes(lastname)) {
      return `Pure`;
    } else {
      return `Muggle`;
    }
  }
  return bloodStat;
}

// DISPLAY STUDENTS FUNCTIONS
function displayCleanStudentList(students) {
  // clear the list
  document.querySelector("#student-display__container").innerHTML = "";

  // build a new list
  students.forEach(displayStudent);
}

function displayStudent(student) {
  // create clone
  // const clone = document.querySelector("template#student").content.cloneNode(true);
  const clone = document.querySelector("template#student").content.cloneNode(true);

  if (student.firstname === "Leanne") {
    clone.querySelector(".student__card__name").textContent = student.firstname;
  } else if (student.middlename === `N/A` && student.nickname === `N/A`) {
    clone.querySelector(".student__card__name").textContent = `${student.firstname} ${student.lastname}`;
  } else if (student.middlename === `N/A` && student.nickname !== `N/A`) {
    clone.querySelector(".student__card__name").textContent = `${student.firstname} "${student.nickname}" ${student.lastname}`;
  } else {
    clone.querySelector(".student__card__name").textContent = `${student.firstname} ${student.middlename} ${student.lastname}`;
  }

  if (student.firstname === "Leanne") {
    clone.querySelector(".student__card__img").alt = `Student Photo N/A`;
  } else {
    clone.querySelector(".student__card__img").src = `images/${student.image}`;
  }

  //STUDENT INFO
  clone.querySelector(".student__card__info .blood").textContent = `${student.blood}`;

  if (student.prefect === true) {
    clone.querySelector(".student__card__info .prefect").textContent = `Is prefect for ${student.house}.`;
  } else {
    clone.querySelector(".student__card__info .prefect").textContent = `Not prefect`;
  }

  if (student.house === "Slytherin" && student.inquisitorial === true) {
    clone.querySelector(".student__card__info .inquisitorial").textContent = `Is inquisitorial`;
  } else if (student.house === "Slytherin" && student.inquisitorial === false) {
    clone.querySelector(".student__card__info .inquisitorial").textContent = `Not inquisitorial`;
  } else {
    clone.querySelector(".student__card__info p:last-child").classList.add("hidden");
  }

  clone.querySelector("#student__card").classList.add(`${student.house.toLowerCase()}`);

  //Add EventListener for showing specific student
  clone.querySelector("#student__card").addEventListener("click", () => showDetails(student));

  document.querySelector("#student-display__container").appendChild(clone);
}

// FILTER FUNCTIONS

function selectFilter(event) {
  let filter = document.querySelector("#filter__container").value;
  let filterType = event.target.dataset.type;

  setFilter(filter, filterType);
}

function setFilter(filter, filterType) {
  settings.filterBy = filter;
  settings.filterType = filterType;

  // Build new student list
  buildNewList();
}

function filterList() {
  // if the studentType is AllS tudents, of the above then just return allStudents as is
  if (settings.filterType === "all") {
    return allStudents;
  } else {
    return allStudents.filter(filterStudents);
  }
}

function filterStudents(student) {
  // Return students which house matches the filterBY value
  return student[`${settings.filterType}`] === settings.filterBy;
}

//SORT FUNCTIONS

function selectSorting(event) {
  if (settings.sortDir === "asc") {
    event.target.dataset.sortDirection = "desc";
  } else if (settings.sortDir === "desc") {
    event.target.dataset.sortDirection = "asc";
  }

  // sets sortBy and sortDir
  const sortBy = event.target.dataset.sort;
  const sortDir = event.target.dataset.sortDirection;

  // calls the setSort function with sortBy and sortDir as parameters
  setSort(sortBy, sortDir);
}

function setSort(sortBy, sortDir) {
  settings.sortBy = sortBy;
  settings.sortDir = sortDir;

  console.log(settings);

  buildNewList();
}

function sortList(sortedList) {
  let direction = 1;

  // Check for what comes from sortedList
  // for (let i = 0; i < sortedList.length; i++) {
  //   console.log(sortedList[i].firstname);
  // }

  // controls which way list is sorted
  if (settings.sortDir === "desc") {
    direction = -1;
  } else {
    direction = 1;
  }

  document.querySelector(".span__direction").textContent = `${settings.sortDir.charAt(0).toUpperCase()}${settings.sortDir.slice(1).toLowerCase()}`;

  // gives sotedList the value of sortedList, after it has been through the sort function.
  sortedList = sortedList.sort(sortCurrentList);

  function sortCurrentList(elementA, elementB) {
    // console.log(elementA[settings.sortBy] + "," + elementB[settings.sortBy]);
    if (elementA[settings.sortBy] < elementB[settings.sortBy]) {
      return -1 * direction;
    } else if (elementA[settings.sortBy] > elementB[settings.sortBy]) {
      return 1 * direction;
    } else {
      return 0;
    }
  }
  // Check values from sortCurrentList is sorted
  // for (let i = 0; i < sortedList.length; i++) {
  //   console.log(sortedList[i].firstname);
  // }

  // returns the sotedList
  return sortedList;
}

//BUILD NEW LIST AFTER FILTER AND/OR SORT
function buildNewList() {
  // Creates a variable "currentList" and give it the filtered value of allStudents
  const currentList = filterList(allStudents);
  const sortedList = sortList(currentList);

  // displays currentList
  displayCleanStudentList(currentList);
}

//Show Students details

function showDetails(student) {
  //Toggle hidden from pop up
  document.querySelector("#popUp").classList.toggle("hidden");

  document.querySelector("#popUp .close").addEventListener("click", closePop);

  //Add images
  document.querySelector(".pop-image-student").src = `images/${student.image}`;
  document.querySelector(".pop-image-housecrest").src = `images/${student.house.toLowerCase()}_crest.svg`;

  //Add text to stuff
  //Fullname
  if (student.firstname === "Leanne") {
    document.querySelector(".pop-fullname").textContent = student.firstname;
  } else if (student.middlename === `N/A` && student.nickname === `N/A`) {
    document.querySelector(".pop-fullname").textContent = `${student.firstname} ${student.lastname}`;
  } else if (student.middlename === `N/A` && student.nickname !== `N/A`) {
    document.querySelector(".pop-fullname").textContent = `${student.firstname} "${student.nickname}" ${student.lastname}`;
  } else {
    document.querySelector(".pop-fullname").textContent = `${student.firstname} ${student.middlename} ${student.lastname}`;
  }
  //Name + Blood
  document.querySelector(".pop-firstname").textContent = student.firstname;
  document.querySelector(".pop-middlename").textContent = student.middlename;
  document.querySelector(".pop-lastname").textContent = student.lastname;
  document.querySelector(".pop-nickname").textContent = student.nickname;
  document.querySelector(".pop-blood").textContent = student.blood;
  document.querySelector(".pop-gender").textContent = student.gender;

  // Student Tasks
  checkStudentStats(student);

  function checkStudentStats(student) {
    //Add prfect listener
    document.querySelector(".pop-prefect__container .slider").addEventListener("click", newPrefect);

    //Update visual
    if (student.prefect === true) {
      document.querySelector(".pop-prefect").textContent = `Student is prefect for ${student.house}.`;
      document.querySelector(".prefinput").checked = true;
    } else if (student.prefect === false) {
      document.querySelector(".pop-prefect").textContent = `Student is NOT prefect for ${student.house}.`;
      document.querySelector(".prefinput").checked = false;
    }

    function newPrefect() {
      //If checked to false --> it is set to CHECKED now, so check for other prefects

      if (document.querySelector(".prefinput").checked === true) {
        document.querySelector(".pop-prefect__container .slider").removeEventListener("click", newPrefect);
        student.prefect = false;
        console.log(document.querySelector(".prefinput").checked);
        document.querySelector(".pop-prefect").textContent = `Student is NOT prefect for ${student.house}.`;
        buildNewList();
      }
      //If checkbox set to TRUE, then we check if it is possible:
      else if (document.querySelector(".prefinput").checked === false) {
        document.querySelector(".pop-prefect__container .slider").removeEventListener("click", newPrefect);
        console.log(document.querySelector(".prefinput").checked);
        checkPrefect(student);
        buildNewList();
      }
    }

    // INQ UPDATE
    if (student.house === "Slytherin" && student.blood === "Pure") {
      if (student.inquisitorial === true) {
        document.querySelector(".pop-inquisitorial").textContent = `Student is part of inquisitorial squad`;
        document.querySelector(".inqinput").checked = true;
      } else {
        document.querySelector(".pop-inquisitorial").textContent = `Student is NOT part of inquisitorial squad`;
        document.querySelector(".inqinput").checked = false;
      }
    } else {
      document.querySelector(".pop-inquisitorial__container").classList.add("hidden");
    }

    document.querySelector(".inqinput").addEventListener("change", () => {
      const input = document.querySelector(".inqinput");

      if (input.checked === true) {
        document.querySelector(".pop-inquisitorial").textContent = `Student is part of inquisitorial squad`;
        student.inquisitorial = true;
        buildNewList();
      } else if (input.checked === false) {
        document.querySelector(".pop-inquisitorial").textContent = `Student is NOT part of inquisitorial squad`;
        student.inquisitorial = false;
        buildNewList();
      }
    });
  }
}

function closePop() {
  document.querySelector("#popUp .close").removeEventListener("click", closePop);
  document.querySelector("#popUp").classList.toggle("hidden");
}

function checkPrefect(chosenStudent) {
  console.log(chosenStudent);
  //Make three lists: One for all prefects, one for how many in the same house and one for how many of the same gender
  const prefects = allStudents.filter((person) => person.prefect);
  const housePrefects = prefects.filter((person) => person.house === chosenStudent.house);
  const otherGender = prefects.filter((person) => person.gender === chosenStudent.gender).shift();

  console.log(prefects);
  console.log(housePrefects);
  console.log(otherGender);
  // console.log(`${prefects}`);
  // console.log(`${housePrefects}`);
  // console.log(`${otherGender}`);

  if (otherGender !== undefined && housePrefects.length >= 2) {
    console.log("There can only be one John");
    openRemoveModal(chosenStudent, otherGender);
  } else {
    console.log("OKEIDOKEI -- TRUTH");
    makeNewPrefect(chosenStudent);
  }

  function openRemoveModal(newPre, extPre) {
    console.log("OpenRemoveModal");
    document.querySelector("#removeModal").classList.remove("hidden");
    document.querySelector("#removeModal .close").addEventListener("click", closeRemoveModal);
    document.querySelectorAll(".ext-pref").forEach((text) => {
      text.textContent = extPre.firstname;
    });
    document.querySelector(".new-pref").textContent = newPre.firstname;

    document.querySelector(".remove-new-pref-but").addEventListener("click", removeNewPrefect);
    document.querySelector(".remove-ext-pref-but").addEventListener("click", removeExistingPrefect);
  }

  function removeNewPrefect() {
    console.log(`removeNewPrefect: ${chosenStudent.firstname}`);
    chosenStudent.prefect = false;
    document.querySelector(".prefinput").checked = false;
    document.querySelector(".pop-prefect").textContent = `Student is NOT prefect for ${chosenStudent.house}.`;
    buildNewList();
    closeRemoveModal();
  }

  function removeExistingPrefect() {
    console.log(`removeExistingPrefect: ${otherGender.firstname}, with: ${chosenStudent.firsname}`);
    chosenStudent.prefect = true;
    document.querySelector(".prefinput").checked = true;
    document.querySelector(".pop-prefect").textContent = `Student is prefect for ${student.house}.`;
    otherGender.prefect = false;
    buildNewList();
    closeRemoveModal();
  }

  // makeNewPrefect(chosenStudent, otherGender);
  function makeNewPrefect(newPre) {
    newPre.prefect = true;
    document.querySelector(".pop-prefect").textContent = `Student is prefect for ${chosenStudent.house}.`;
    buildNewList();
  }

  function closeRemoveModal() {
    document.querySelector("#removeModal").classList.add("hidden");
    document.querySelector("#removeModal .close").removeEventListener("click", closeRemoveModal);
    document.querySelectorAll(".ext-pref").forEach((text) => {
      text.textContent = "";
    });
    document.querySelector(".new-pref").textContent = "";
  }
  // function removeOtherInfo(other) {
  //   document.querySelector("#removeFolks.modal").classList.remove("hide");
  //   document.querySelector("#removeFolks.modal .close").addEventListener("click", closeDialog);
  //   document.querySelector(".remove-new-pref-but").addEventListener("click", clickRemoveNew);
  //   document.querySelector(".remove-ext-pref-but").addEventListener("click", clickRemoveOther);

  //   document.querySelectorAll(".ext-pref").forEach((text) => {
  //     text.textContent = other.firstname;
  //   });
  //   document.querySelector(".new-pref").textContent = chosenStudent.firstname;
  // }
}

// function tryMakePrefect(chosenStudent) {
//   //Maker filter for sudents that are prefects ++ filter that list for people with the same gender and shift the oldest entry
//   console.log(chosenStudent);
//   console.log(housePrefects);
//   console.log(prefects);
//   console.log(otherGender);

//   //Make the student a prefect - If user wants!
//   if (otherGender !== undefined) {
//     removeAorB(chosenStudent, otherGender);
//   } else {
//     makePrefect(chosenStudent);
//   }

//   function makePrefect(student) {
//     student.prefect = true;
//     document.querySelector(".prefinput").checked = true;
//     document.querySelector(".pop-prefect").textContent = `Student is prefect for ${student.house}`;
//     buildNewList();
//   }

//   function removeOtherPrefect(newPre, curPre) {
//     console.log("SKIFT STOL");

//     document.querySelector("#removeFolks").classList.remove("hidden");
//     document.querySelector("#removeFolks .close").addEventListener("click", closeRemove);
//     document.querySelector(".prefectNew").addEventListener("click", ignoreNewPrefect(newPre));
//     document.querySelector(".prefectCurrent").addEventListener("click", removeCurrentPrefect(newPre, curPre));

//     document.querySelectorAll(".existing_prefect_student_name").forEach((span) => {
//       span.textContent = curPre.firstname;
//     });
//     document.querySelector(".prefect_student_name").textContent = newPre.firstname;
//   }

//   // function controlList(studentHouse, studentGender) {
//   //   const sameHouse = allStudents.filter((student) => student.house === studentHouse && student.prefect);
//   //   const sameGender = sameHouse.filter((student) => student.gender === studentGender);
//   //   if (sameHouse.length < 2 && sameGender < 1) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }
//   // }

//   function ignoreNewPrefect(newPre) {
//     newPre.prefect = false;
//     document.querySelector(".prefinput").checked = false;
//     document.querySelector(".pop-prefect").textContent = `Student is NOT prefect for ${chosenStudent.house}.`;
//     closeRemove(newPre);
//   }

//   function removeCurrentPrefect(newPre, curPre) {
//     removeOtherPrefect(newPre, curPre);
//     makePrefect(newPre);
//     buildNewList();
//     closeRemove(newPre);
//   }

//   function removeOtherPrefect(newPre, curPre) {
//     curPre.prefect = false;
//     closeRemove(newPre);
//   }

//   function closeRemove(newPre) {
//     document.querySelector("#removeFolks .close").removeEventListener("click", closeRemove);
//     document.querySelector(".prefectNew").removeEventListener("click", ignoreNewPrefect(newPre));
//     document.querySelector(".prefectCurrent").removeEventListener("click", removeCurrentPrefect(newPre, curPre));

//     document.querySelector("#removeFolks").classList.add("hidden");
//     document.querySelector(".prefinput").checked = false;
//     showDetails(newPre);
//   }

// function escCloseRemove(event) {
//   document.addEventListener("keydown", escCloseDetails);
//   document.removeEventListener("keydown", escCloseRemove);
//   document.querySelector("#removeFolks .close").removeEventListener("click", closeRemove);
//   document.querySelector(".prefectNew").removeEventListener("click", ignoreNewPrefect);
//   document.querySelector(".prefectCurrent").removeEventListener("click", removeCurrentPrefect);
//   document.querySelector(".prefinput").addEventListener("change", clickPrefect);

//   if (event.key === "Escape") {
//     document.querySelector("#removeFolks").classList.add("hidden");
//   }
//   document.querySelector(".prefinput").checked = false;
// }
// }

// INITIATE HACK FUNCTIONS
function initHacked(event) {
  if (hackedArray.length === 0 && event.key === "a") {
    console.log("A...");
    hackedArray.push(event.key);
    // console.log(hackedArray);
  } else if (hackedArray.length === 1 && hackedArray[0] === "a" && event.key === "l") {
    console.log("L...");
    hackedArray.push(event.key);
    // console.log(hackedArray);
  } else if (hackedArray.length === 2 && hackedArray[1] === "l" && event.key === "o") {
    console.log("O...");
    hackedArray.push(event.key);
    // console.log(hackedArray);
  } else if (hackedArray.length === 3 && hackedArray[2] === "o" && event.key === "h") {
    console.log("H...");
    hackedArray.push(event.key);
    // console.log(hackedArray);
  } else if (hackedArray.length === 4 && hackedArray[3] === "h" && event.key === "o") {
    console.log("O...");
    hackedArray.push(event.key);
    // console.log(hackedArray);
  } else if (hackedArray.length === 5 && hackedArray[4] === "o" && event.key === "m") {
    console.log("M...");
    hackedArray.push(event.key);
    // console.log(hackedArray);
  } else if (hackedArray.length === 6 && hackedArray[5] === "m" && event.key === "o") {
    console.log("O...");
    hackedArray.push(event.key);
    // console.log(hackedArray);
  } else if (hackedArray.length === 7 && hackedArray[6] === "o" && event.key === "r") {
    console.log("R...");
    hackedArray.push(event.key);
    // console.log(hackedArray);
  } else if (hackedArray.length === 8 && hackedArray[7] === "r" && event.key === "a") {
    console.log("A!");
    console.log("ALOHOMORA HAS BEEN CASTED");
    hackedArray.push(event.key);
    xXHACKEDXx();
  } else {
    // console.log("Not pressed correct order :(");
    hackedArray = [];
  }
}

function xXHACKEDXx() {
  console.log("YOU HAVE BEEN HACKED BROOO");
  hackedArray = [];
  document.removeEventListener("keydown", initHacked);
}
