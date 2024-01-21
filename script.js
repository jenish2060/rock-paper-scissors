let playerScore = 0;
let computerScore = 0;

const btn = document.querySelector("#rockButton");
const playerText = document.createElement("h3");
const computerText = document.createElement("h3");
const roundResultText = document.createElement("h3");
const roundResult = document.querySelector(".result");

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return `Rock`;
    case 1:
      return `Paper`;
    case 2:
      return `Scissors`;
  }
}

const getPlayerChoice = () => {
  let playerChoice = "rock";
  return playerChoice;
};

function playRound(playerSelection, computerSelection) {
  playerSelection = capitalizeFirstLetter(playerSelection);
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

function capitalizeFirstLetter(selection) {
  selection = `${selection.charAt(0).toUpperCase()}${selection
    .slice(1)
    .toLowerCase()}`;
  return selection;
}

function game() {
  let playerSelection = getPlayerChoice();
  let computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  showRoundResult();
}

function showRoundResult() {
  playerText.classList.add("roundResultText");
  computerText.classList.add("roundResultText");
  roundResultText.classList.add("roundResultText");
  roundResult.append(playerText, computerText, roundResultText);
}

function gameWinner() {
  if (playerScore > computerScore) {
    console.log("You Won!");
  } else if (computerScore > playerScore) {
    console.log("You Lost!");
  } else {
    console.log("It's a Tie!");
  }
}

game();
