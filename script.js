function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber){
        case 0:
            return 'ROCK';
        case 1:
            return 'PAPER';
        case 2:
            return 'SCISSORS';
    }
}

const getPlayerChoice = () => {
    let playerChoice = prompt("ROCK | PAPER | SCISSORS").toUpperCase();
    return playerChoice;
};

console.log(getComputerChoice());
console.log(getPlayerChoice());