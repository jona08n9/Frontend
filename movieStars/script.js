const file = "actors.json";

document.addEventListener("DOMContentLoaded", start);
let movies;
let filter = "all";

//Calling after DOM is loaded
function start() {
  const filterButtons = document.querySelectorAll("nav button");
  filterButtons.forEach((button) => button.addEventListener("click", filterMovies));
  getData(file);
}

//Event listener on the buttons
function filterMovies() {
  filter = this.dataset.movie;

  document.querySelector(".chosen").classList.toggle("chosen");
  this.classList.toggle("chosen");

  // Call json file load)
  showActors();
}

//Run the Async function
async function getData(file) {
  const result = await fetch(file);
  movies = await result.json();
  showActors();
}

function showActors() {
  // Call the const
  const container = document.querySelector("main");
  const template = document.querySelector("template");

  //Clear main container for all text
  container.textContent = "";
  movies.forEach((actor) => {
    //Check if running
    console.log("Movie", actor.movie);

    //Check the filter
    if (filter == actor.movie || filter == "all") {
      const clone = template.cloneNode(true).content;
      const movie = actor.movie.replaceAll(" ", "").toLowerCase();
      clone.querySelector(".full-name").textContent = actor.fullname;
      clone.querySelector("article").classList.add(movie);

      clone.querySelector("article").addEventListener("click", () => showDetails(actor));
      container.appendChild(clone);
    }
  });
}

function showDetails(actor) {
  console.log(actor);

  //Toggle hidden from pop up
  document.querySelector(".pop-op").classList.toggle("hidden");

  //Add text
  document.querySelector(".pop_actor").textContent = actor.fullname;
  document.querySelector(".pop_movie").textContent = actor.movie;

  //Add event listener to close
  document.querySelector(".pop_close").addEventListener("click", closeDetails);
}

//Run the closing of pop-up
function closeDetails() {
  document.querySelector(".pop-op").classList.toggle("hidden");
}

getData(file);
