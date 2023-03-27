"use strict";
document.querySelector("#post").addEventListener("click", post);

get();

function get() {
  fetch("https://ponkzfmbqesqbziteamo.supabase.co/rest/v1/wines", {
    method: "get",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvbmt6Zm1icWVzcWJ6aXRlYW1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk5MTkzNTUsImV4cCI6MTk5NTQ5NTM1NX0.RSWdmnxCnrTGNGgdaILP3EqzoTOL3DaKz45hlaXqYq4",
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
  fetch("https://ponkzfmbqesqbziteamo.supabase.co/rest/v1/wines", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Prefer: "return=representation",
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvbmt6Zm1icWVzcWJ6aXRlYW1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk5MTkzNTUsImV4cCI6MTk5NTQ5NTM1NX0.RSWdmnxCnrTGNGgdaILP3EqzoTOL3DaKz45hlaXqYq4",
    },
    body: JSON.stringify(newWine),
  })
    .then((e) => e.json())
    .then((e) => get());
}

function deleteWine(id) {
  fetch("https://ponkzfmbqesqbziteamo.supabase.co/rest/v1/wines?id=eq." + id, {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
      Prefer: "return=representation",
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvbmt6Zm1icWVzcWJ6aXRlYW1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk5MTkzNTUsImV4cCI6MTk5NTQ5NTM1NX0.RSWdmnxCnrTGNGgdaILP3EqzoTOL3DaKz45hlaXqYq4",
    },
  })
    .then((e) => e.json())
    .then((e) => get());
}

function patch(id) {
  const updates = {
    name: "Lasses Wine",
    isGood: true,
  };

  fetch("https://ponkzfmbqesqbziteamo.supabase.co/rest/v1/wines?id=eq." + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvbmt6Zm1icWVzcWJ6aXRlYW1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk5MTkzNTUsImV4cCI6MTk5NTQ5NTM1NX0.RSWdmnxCnrTGNGgdaILP3EqzoTOL3DaKz45hlaXqYq4",
    },
    body: JSON.stringify(updates),
  })
    .then((e) => e.json())
    .then((e) => get());
}
