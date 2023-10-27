
const option = ["rock", "scissors", "paper"];
function getComputerChoice() {
  let computerChoice = option[Math.floor(Math.random() * option.length)];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  if(computerSelection === "rock" && playerSelection === "rock" || computerSelection === "paper" && playerSelection === "paper" || computerSelection === "scissors" && playerSelection === "scissors") {
    return `Draw! ${playerSelection} equals ${computerSelection}`;
  } else if(computerSelection === "rock" && playerSelection === "scissors" || computerSelection === "scissors" && playerSelection === "paper" || computerSelection === "paper" && playerSelection === "rock") {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if(computerSelection === "scissors" && playerSelection === "rock" || computerSelection === "paper" && playerSelection === "scissors" || computerSelection === "rock" && playerSelection === "paper") {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  };
};

function game() {
  let playerSelection;
  let computerSelection;
  let playerScore = 0;
  let computerScore = 0;
  let draw = 0;

  for (let round = 1; round <= 5; round++) {
    playerSelection = prompt("Choose", "").toLowerCase();
    computerSelection = getComputerChoice();

    let result = playRound(playerSelection, computerSelection);

    if (result === `Draw! ${playerSelection} equals ${computerSelection}`) {
      draw++;
    } else if (result === `You Lose! ${computerSelection} beats ${playerSelection}`) {
      computerScore++;
    } else if (result === `You Win! ${playerSelection} beats ${computerSelection}`) {
      playerScore++;
    };
    console.log(`Result: ${result} \n Player Chose: ${playerSelection} and Computer Chose: ${computerSelection} \n Score: \n Draw: ${draw}, Player Score: ${playerScore}, Computer Score: ${computerScore}`);
  };

  if (playerScore > computerScore) {
    console.log(`Final Result: Player Wins with total score of: ${playerScore}`);
  } else if (playerScore < computerScore) {
    console.log(`Final Result: Computer Wins with total score of: ${computerScore}`);
  } else if (playerScore === computerScore) {
    console.log(`Draw! There is no winner as Player Score is: ${playerScore} and Computer Score i ${computerScore}`);
  };
};

game();