const option = ["rock", "scissors", "paper"];
function getComputerChoice() {
    let computerChoice = option[Math.floor(Math.random() * option.length)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    if(computerSelection === "rock" && playerSelection === "rock" || computerSelection == "paper" && playerSelection == "paper" || computerSelection == "scissors" && playerSelection == "scissors") {
        return "Draw! Play Again";
    } else if(computerSelection === "rock" && playerSelection === "scissors") {
        return "Computer Wins! Rock beats Scissors";
    } else if(computerSelection === "scissors" && playerSelection === "rock") {
        return "You Won! Rock beats Scissors";
    } else if(computerSelection === "scissors" && playerSelection === "paper") {
        return "Computer Wins! Scissors beats Paper";
    } else if(computerSelection === "paper" && playerSelection === "scissors") {
        return "You Won! Scissors beats Paper";
    } else if(computerSelection === "paper" && playerSelection === "rock") {
        return "Computer Wins! Paper beats Rock";
    } else if(computerSelection === "rock" && playerSelection === "paper") {
        return "You Won! Paper beats Rock";
    }
}

const playerSelection = "ROCK";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection.toLowerCase(), computerSelection));
