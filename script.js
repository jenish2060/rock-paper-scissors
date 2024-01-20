let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "ROCK";
    case 1:
      return "PAPER";
    case 2:
      return "SCISSORS";
  }
}

const getPlayerChoice = () => {
  let playerChoice = prompt("ROCK | PAPER | SCISSORS").toUpperCase();
  return playerChoice;
};

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a Tie! ${playerSelection} ties with ${computerSelection}`;
  } else if (
    (playerSelection === "ROCK" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "SCISSORS") ||
    (playerSelection === "SCISSORS" && computerSelection === "ROCK")
  ) {
    computerScore += 1;
    return `You Lost! ${computerSelection} beats ${playerSelection}`;
  } else {
    playerScore += 1;
    return `You Won! ${playerSelection} beats ${computerSelection}`;
  }
}

function game() {
  let playerSelection = getPlayerChoice();
  let computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

  playerSelection = getPlayerChoice();
  computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

  playerSelection = getPlayerChoice();
  computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

  playerSelection = getPlayerChoice();
  computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

  playerSelection = getPlayerChoice();
  computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  
  if (playerScore > computerScore) {
    console.log("You Won!");
  } else if (computerScore > playerScore) {
    console.log("You Lost!");
  } else {
    console.log("It's a Tie!");
  }
}

game();
