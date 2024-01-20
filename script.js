let playerScore = 0;
let computerScore = 0;

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
  let playerChoice = prompt("ROCK | PAPER | SCISSORS");
  return playerChoice;
};

function playRound(playerSelection, computerSelection) {
  playerSelection = capitalizeFirstLetter(playerSelection);
  if (playerSelection === computerSelection) {
    return `It's a Tie! ${playerSelection} ties with ${computerSelection}`;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    computerScore += 1;
    return `You Lost! ${computerSelection} beats ${playerSelection}`;
  } else {
    playerScore += 1;
    return `You Won! ${playerSelection} beats ${computerSelection}`;
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

  gameWinner();
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
