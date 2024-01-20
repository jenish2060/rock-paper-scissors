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
    return `You Lost! ${computerSelection} beats ${playerSelection}`;
  } else {
    return `You Won! ${playerSelection} beats ${computerSelection}`;
  }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection,computerSelection));
