
let rock = document.getElementById("r");
let paper = document.getElementById("p");
let scissors = document.getElementById("s");
let score = document.getElementById("score");
let userWrite = document.getElementById("user");
let computerWrite = document.getElementById("comp");
let utility = document.getElementById("utility");
let computerChoice;
let userScore = 0;
let computerScore = 0;

document.getElementById("r").addEventListener("click", function () {
  game("r");
});
document.getElementById("p").addEventListener("click", function () {
  game("p");
});
document.getElementById("s").addEventListener("click", function () {
  game("s");
});

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return "p";
  } else if (random === 1) {
    return "s";
  }
  return "r";
}

function convertToWord(letter) {
  if (letter === "r") return "rock 🪨";
  if (letter === "p") return "paper 🗞️";
  return "scissors ✂️";
}

function game(userChoice) {
  computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function win(userChoice, computerChoice) {
  userScore++;
  score.innerHTML = userScore + " : " + computerScore;
  userWrite.innerHTML = "You choose " + convertToWord(userChoice);
  computerWrite.innerHTML = "Computer choose " + convertToWord(computerChoice);
  utility.innerHTML = "You win 🎉";
}

function lose(userChoice, computerChoice) {
  computerScore++;
  score.innerHTML = userScore + " : " + computerScore;
  userWrite.innerHTML = "You choose " + convertToWord(userChoice);
  computerWrite.innerHTML = "Computer choose " + convertToWord(computerChoice);
  utility.innerHTML = "You loose 😖";
}

function draw(userChoice, computerChoice) {
  userWrite.innerHTML = "You choose " + convertToWord(userChoice);
  computerWrite.innerHTML = "Computer choose " + convertToWord(computerChoice);
  utility.innerHTML = "Draw 🤝";
}
