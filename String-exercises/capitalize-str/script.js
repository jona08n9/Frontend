"use strict";

function capitalize(string) {
  const capitalizeName = `${string.charAt(0).toUpperCase()}${string.slice(1).toLowerCase()}`;
  return capitalizeName;
}

let name = capitalize("jOnAs");

console.log(name);
