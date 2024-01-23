const choiceArray = ["Rock", "Paper", "Scissors"];

let playerScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("#rockButton");
const paperBtn = document.querySelector("#paperButton");
const scissorsBtn = document.querySelector("#scissorsButton");

const player = document.querySelector(".playerScore");
const computer = document.querySelector(".computerScore");

const roundResult = document.querySelector(".result");
const playerText = document.createElement("h3");
const computerText = document.createElement("h3");
const roundResultText = document.createElement("h3");

const gameWinner = document.createElement("h3");
const playAgain = document.createElement("button");

rockBtn.addEventListener("click", () => handleClick("Rock"));
paperBtn.addEventListener("click", () => handleClick("Paper"));
scissorsBtn.addEventListener("click", () => handleClick("Scissors"));

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  return choiceArray[randomNumber];
}

function handleClick(playerSelection) {
  let computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  showRoundResult();
  updateScore();
}

function playRound(playerSelection, computerSelection) {
  playerText.textContent = `You choose ${playerSelection}`;
  computerText.textContent = `Computer choose ${computerSelection}`;

  if (playerSelection === computerSelection) {
    roundResultText.textContent = `It's a Tie! ${playerSelection} ties with ${computerSelection}`;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    computerScore += 1;
    roundResultText.textContent = `You Lost! ${computerSelection} beats ${playerSelection}`;
  } else {
    playerScore += 1;
    roundResultText.textContent = `You Won! ${playerSelection} beats ${computerSelection}`;
  }
}

function updateScore() {
  player.textContent = playerScore;
  computer.textContent = computerScore;
}

function showRoundResult() {
  playerText.classList.add("roundResultText");
  computerText.classList.add("roundResultText");
  roundResultText.classList.add("roundResultText");
  roundResult.append(playerText, computerText, roundResultText);
}

function gameWinnerResult() {
  if (playerScore > computerScore) {
    gameWinner.textContent = "You Won";
  } else if (computerScore > playerScore) {
    gameWinner.textContent = "You Lost";
  } else {
    gameWinner.textContent = `It's a Tie`;
  }
}
