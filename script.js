const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}


function playRound() {
    
    const playerSelection = prompt("Rock, Paper, or Scissors?");
    const computerSelection = getComputerChoice();

    if (computerSelection == playerSelection) {
        console.log("It's a tie.");
    } else if (computerSelection == "Rock" && playerSelection == "Paper") {
        console.log("Paper covers rock. You win!");
    } else if (computerSelection == "Rock" && playerSelection == "Scissors") {
        console.log("Rock crushes scissors. You lose...");
    } else if (computerSelection == "Scissors" && playerSelection == "Paper") {
        console.log("Scissors cuts paper. You lose...");
    } else if (computerSelection == "Scissors" && playerSelection == "Rock") {
        console.log("Rock crushes scissors. You win!");
    } else if (computerSelection == "Paper" && playerSelection == "Rock") {
        console.log("Paper covers rock. You lose...");
    } else console.log("Scissors cuts paper. You win!");
    

} playRound();