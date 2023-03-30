"use strict";

import { API_KEY, ENDPOINT } from "./modules/config.js";
document.querySelector("#post").addEventListener("click", post);

get();

function get() {
  fetch(ENDPOINT, {
    method: "get",
    headers: {
      apikey: API_KEY,
    },
  })
    .then((e) => e.json())
    .then((data) => {
      const t = document.querySelector("template").content;
      document.querySelector("main").innerHTML = "";
      data.forEach((wine) => {
        const copy = t.cloneNode(true);
        copy.querySelector("h2").textContent = wine.name;
        copy.querySelector("button.delete").addEventListener("click", () => {
          deleteWine(wine.id);
        });
        copy.querySelector("button.update").addEventListener("click", () => {
          patch(wine.id);
        });
        document.querySelector("main").appendChild(copy);
      });
    });
}

function post() {
  const newWine = {
    name: "Dannie's Wine",
    grapes: ["pinor lightblue"],
    year: 1986,
    type: "white",
    origin: {
      country: "Denmark",
      region: "Nordsjælland",
    },
    isGood: false,
  };
  fetch(ENDPOINT, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Prefer: "return=representation",
      apikey: API_KEY,
    },
    body: JSON.stringify(newWine),
  })
    .then((e) => e.json())
    .then((e) => get());
}

function deleteWine(id) {
  fetch(`${ENDPOINT}?id=eq.${id}`, {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
      Prefer: "return=representation",
      apikey: API_KEY,
    },
  })
    .then((e) => e.json())
    .then((e) => get());
}

function patch(id) {
  const updates = {
    name: "Frederiks Wine",
    isGood: true,
  };

  fetch(`${ENDPOINT}?id=eq.${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Prefer: "return=representation",
      apikey: API_KEY,
    },
    body: JSON.stringify(updates),
  })
    .then((e) => e.json())
    .then((e) => get());
}
