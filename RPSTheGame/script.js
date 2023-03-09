document.addEventListener("DOMContentLoaded", loadGame);

//Add all variables
let player;
let computer;
let randomNumber;
let score;
const playerHand = document.querySelector("#player1");
const computerHand = document.querySelector("#player2");
let games = 0;
let playerWin = 0;
const winRate = document.querySelector("#win_rate");
const displayWinRate = document.querySelector(".win_rate_percentage");
const displayGamesWon = document.querySelector(".win_rate_wins");
const displayGamesPlayed = document.querySelector(".win_rate_games-played");

//Load the animation listeners
function loadGame() {
  console.log("Game loaded and ready");

  //Add event listeners to buttons
  document.querySelectorAll("button").forEach((button) => button.addEventListener("mouseup", startHandsAnimation));

  //Remove old move decisions and starts the hand animation
  playerHand.classList.remove("rock", "paper", "scissors");
  computerHand.classList.remove("rock", "paper", "scissors");
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
}

//Animate button push and give player hand value
function startHandsAnimation() {
  //Add push animation to buttons
  this.classList.toggle("button_push");
  this.classList.remove("shadow");
  this.addEventListener("animationend", removeButtonAnimation);

  //Give the player it's chosen weapon
  if (this.classList.contains("rock")) {
    console.log("Player has chosen ROCK!");
    player = "rock";
  } else if (this.classList.contains("paper")) {
    console.log("Player has chosen PAPER!");
    player = "paper";
  } else {
    console.log("Player has chosen SCISSOR!");
    player = "scissor";
  }
}

//Remove animation class from the pushed button when the animaton is over
function removeButtonAnimation() {
  document.querySelector(".button_push").classList.toggle("shadow");
  document.querySelector(".button_push").classList.toggle("button_push");

  //Start the game animations
  startGame();
}

function startGame() {
  //Get random number for computer move
  randomNumber = Math.floor(Math.random() * 3) + 1;

  //Convert random number to computer move
  if (randomNumber == 1) {
    computer = "rock";
  } else if (randomNumber == 2) {
    computer = "paper";
  } else {
    computer = "scissor";
  }
  //Add shake animation to both hands and remove shake after animation end
  document.querySelectorAll(".player").forEach((player) => player.classList.toggle("shake"));
  document.querySelector("#player1").addEventListener("animationend", showHands);
}

function showHands() {
  //Make the hand show the to the player weapon
  if (player == "rock") {
    playerHand.classList.toggle("shake");
    playerHand.classList.toggle("rock");
  } else if (player == "paper") {
    playerHand.classList.toggle("shake");
    playerHand.classList.toggle("paper");
  } else {
    playerHand.classList.toggle("shake");
    playerHand.classList.toggle("scissors");
  }

  //Make the hand show the computer weapon
  if (computer == "rock") {
    computerHand.classList.toggle("shake");
    computerHand.classList.toggle("rock");
  } else if (computer == "paper") {
    computerHand.classList.toggle("shake");
    computerHand.classList.toggle("paper");
  } else {
    computerHand.classList.toggle("shake");
    computerHand.classList.toggle("scissors");
  }

  //Check who won the game and add wins to playerWin + games played IF won
  if (player == "rock" && computer == "scissor") {
    document.querySelector("#win").classList.toggle("hidden");
    playerWin++;
    games++;
  } else if (player == "paper" && computer == "rock") {
    document.querySelector("#win").classList.toggle("hidden");
    playerWin++;
    games++;
  } else if (player == "scissor" && computer == "paper") {
    document.querySelector("#win").classList.toggle("hidden");
    playerWin++;
    games++;
  } else if (player == computer) {
    document.querySelector("#draw").classList.toggle("hidden");
  } else {
    document.querySelector("#lose").classList.toggle("hidden");
    games++;
  }

  //Show the winRate statistic
  winRate.classList.remove("hidden");
  if (games === 0) {
    displayWinRate.textContent = "0";
    displayGamesWon.textContent = "0";
    displayGamesPlayed.textContent = "0";
  } else {
    displayWinRate.textContent = Math.ceil((playerWin / games) * 100);
    displayGamesWon.textContent = playerWin;
    displayGamesPlayed.textContent = games;
  }
  // Add listener to buttons, so they reset the game when you press it.
  document.querySelectorAll("button").forEach((button) => button.addEventListener("mouseup", loadGame));
}
