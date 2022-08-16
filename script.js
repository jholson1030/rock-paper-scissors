const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}


function playRound() {
    
    const playerSelection = prompt("Rock, Paper, or Scissors?");
    const computerSelection = getComputerChoice();

    if (computerSelection == playerSelection) {
        console.log("It's a tie.");
    } else if (computerSelection == "rock" && playerSelection.toLowerCase() == "paper") {
        return console.log("Paper covers rock. You win!");
    } else if (computerSelection == "rock" && playerSelection.toLowerCase() == "scissors") {
        return console.log("Rock crushes scissors. You lose...");
    } else if (computerSelection == "scissors" && playerSelection.toLowerCase() == "paper") {
        return console.log("Scissors cuts paper. You lose...");
    } else if (computerSelection == "scissors" && playerSelection.toLowerCase() == "rock") {
        return console.log("Rock crushes scissors. You win!");
    } else if (computerSelection == "paper" && playerSelection.toLowerCase() == "rock") {
        return console.log("Paper covers rock. You lose...");
    } else return console.log("Scissors cuts paper. You win!");
    

}

function game() {
    for (let rounds = 0; rounds < 5; rounds++) {
        if (rounds < 5) {
            playRound();   // Needs work...
        } else return console.log("Game over!"); 
    }
    // Set it to keep score and determine a winner
}