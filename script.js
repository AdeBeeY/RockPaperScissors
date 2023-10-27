let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let draw = 0;

const rockBtnElement = document.querySelector('.js-rock-button');
rockBtnElement.addEventListener('click', () => {
  computerSelection = getComputerChoice();
  playerSelection = 'rock';
  let result = playRound(playerSelection, computerSelection);

  if (result === `Draw! ${playerSelection} equals ${computerSelection}`) {
    draw++;
  } else if (result === `You Lose! ${computerSelection} beats ${playerSelection}`) {
    computerScore++;
  } else if (result ===`You Win! ${playerSelection} beats ${computerSelection}`) {
    playerScore++;
  }
  divElement.textContent = `Result: ${result}, Score: PlayerScore: ${playerScore}, Computer Score: ${computerScore}, Draw: ${draw}`;

  if (playerScore === 5) {
    winnerElement.textContent = `Player is the Winner with the Total Score of ${playerScore}`;
  } else if (computerScore === 5) {
    winnerElement.textContent = `Computer is the Winner with the Total Score of ${computerScore}`;
  };
});

const paperBtnElement = document.querySelector('.js-paper-button');
paperBtnElement.addEventListener('click', () => {
  playerSelection = 'paper';
  computerSelection = getComputerChoice();
  let result = playRound(playerSelection, computerSelection);

  if (result === `Draw! ${playerSelection} equals ${computerSelection}`) {
    draw++;
  } else if (result === `You Lose! ${computerSelection} beats ${playerSelection}`) {
    computerScore++;
  } else if (result ===`You Win! ${playerSelection} beats ${computerSelection}`) {
    playerScore++;
  }
  divElement.textContent = `Result: ${result}, Score: PlayerScore: ${playerScore}, Computer Score: ${computerScore}, Draw: ${draw}`;

  if (playerScore === 5) {
    winnerElement.textContent = `Player is the Winner with the Total Score of ${playerScore}`;
  } else if (computerScore === 5) {
    winnerElement.textContent = `Computer is the Winner with the Total Score of ${computerScore}`;
  };
});

const scissorsBtnElement = document.querySelector('.js-scissors-button');
scissorsBtnElement.addEventListener('click', () => {
  playerSelection = 'scissors';
  computerSelection = getComputerChoice();
  let result = playRound(playerSelection, computerSelection);

  if (result === `Draw! ${playerSelection} equals ${computerSelection}`) {
    draw++;
  } else if (result === `You Lose! ${computerSelection} beats ${playerSelection}`) {
    computerScore++;
  } else if (result ===`You Win! ${playerSelection} beats ${computerSelection}`) {
    playerScore++;
  }
  divElement.textContent = `Result: ${result}, Score: PlayerScore: ${playerScore}, Computer Score: ${computerScore}, Draw: ${draw}`;

  if (playerScore === 5) {
    winnerElement.textContent = `Player is the Winner with the Total Score of ${playerScore}`;
  } else if (computerScore === 5) {
    winnerElement.textContent = `Computer is the Winner with the Total Score of ${computerScore}`;
  };
});

const divElement = document.querySelector('.js-result-div');
const winnerElement = document.querySelector('.js-winner-div');

const option = ["rock", "scissors", "paper"];
function getComputerChoice() {
  let computerChoice = option[Math.floor(Math.random() * option.length)];
  return computerChoice;
};

computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  if(computerSelection === "rock" && playerSelection === "rock" || computerSelection === "paper" && playerSelection === "paper" || computerSelection === "scissors" && playerSelection === "scissors") {
    return `Draw! ${playerSelection} equals ${computerSelection}`;
  } else if(computerSelection === "rock" && playerSelection === "scissors" || computerSelection === "scissors" && playerSelection === "paper" || computerSelection === "paper" && playerSelection === "rock") {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if(computerSelection === "scissors" && playerSelection === "rock" || computerSelection === "paper" && playerSelection === "scissors" || computerSelection === "rock" && playerSelection === "paper") {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  };
};
