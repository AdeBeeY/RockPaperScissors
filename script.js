const option = ["rock", "scissors", "paper"];
function getComputerChoice() {
    let computerChoice = option[Math.floor(Math.random() * option.length)];
    return computerChoice;
}

function game(){
    function playRound(playerSelection, computerSelection) {
        if(computerSelection === "rock" && playerSelection === "rock" || computerSelection == "paper" && playerSelection == "paper" || computerSelection == "scissors" && playerSelection == "scissors") {
            return `Draw! Player chose ${playerSelection} Computer chose ${computerSelection}`;
        } else if(computerSelection === "rock" && playerSelection === "scissors") {
            return `Computer Wins! Player chose ${playerSelection} Computer chose ${computerSelection}`;
        } else if(computerSelection === "scissors" && playerSelection === "rock") {
            return `Player Wins! Player chose ${playerSelection} Computer chose ${computerSelection}`;
        } else if(computerSelection === "scissors" && playerSelection === "paper") {
            return `Computer Wins! Player chose ${playerSelection} Computer chose ${computerSelection}`;
        } else if(computerSelection === "paper" && playerSelection === "scissors") {
            return `Player Wins! Player chose ${playerSelection} Computer chose ${computerSelection}`;
        } else if(computerSelection === "paper" && playerSelection === "rock") {
            return `Computer Wins! Player chose ${playerSelection} Computer chose ${computerSelection}`;
        } else if(computerSelection === "rock" && playerSelection === "paper") {
            return `Player Wins! Player chose ${playerSelection} Computer chose ${computerSelection}`;
        }
        playerSelection = prompt("choose", "").toLowerCase();
        computerSelection = getComputerChoice();
        let result = console.log(playRound(playerSelection, computerSelection));
        return result;
    }


        let playerSelection;
        let computerSelection;
        //playRound(playerSelection, computerSelection);

        for (let i = 1; i <= 5; i++) {
            playRound(playerSelection, computerSelection);
        }
}

game();
