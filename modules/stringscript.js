"use strict";

export function capitalize(str) {
  return str.trim().charAt(0).toUpperCase() + str.trim().substring(1).toLowerCase();
}
