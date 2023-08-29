const option = ["Rock", "Scissors", "Paper"];
function getComputerChoice() {
    let computerChoice = option[Math.floor(Math.random() * option.length)];
    return computerChoice;
}
