const choices = ["rock", "paper", "scissors"];
var playerScore = 0;
var computerScore = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}


function playRound() {
    
    const playerSelection = prompt("Rock, Paper, or Scissors?");
    const computerSelection = getComputerChoice();

    if (computerSelection == playerSelection) {
        return alert("It's a tie.");
    } else if (computerSelection == "rock" && playerSelection.toLowerCase() == "paper") {
        alert("Paper covers rock. You win!");
        playerScore++;
        return alert("Your Score: " + playerScore + "\nComputer Score: " + computerScore);
    } else if (computerSelection == "rock" && playerSelection.toLowerCase() == "scissors") {
        alert("Rock crushes scissors. You lose...");
        computerScore++;
        return alert("Your Score: " + playerScore + "\nComputer Score: " + computerScore);
    } else if (computerSelection == "scissors" && playerSelection.toLowerCase() == "paper") {
        alert("Scissors cuts paper. You lose...");
        computerScore++;
        return alert("Your Score: " + playerScore + "\nComputer Score: " + computerScore);
    } else if (computerSelection == "scissors" && playerSelection.toLowerCase() == "rock") {
        alert("Rock crushes scissors. You win!");
        playerScore++;
        return alert("Your Score: " + playerScore + "\nComputer Score: " + computerScore);
    } else if (computerSelection == "paper" && playerSelection.toLowerCase() == "rock") {
        alert("Paper covers rock. You lose...");
        computerScore++;
        return alert("Your Score: " + playerScore + "\nComputer Score: " + computerScore);
    } else if (computerSelection == "paper" && playerSelection.toLowerCase() == "scissors") {
        alert("Scissors cuts paper. You win!");
        playerScore++;
        return alert("Your Score: " + playerScore + "\nComputer Score: " + computerScore);
    } else return alert("That is not a valid option. \nEnter 'rock, paper, or scissors'");    
    

}

function game() {
    while (playerScore < 5 && computerScore < 5) {
        playRound();
    }
    if (playerScore == 5) {
        return alert("You win! The final score is: \nYou: " + playerScore + "\nComputer: " + computerScore);
    } else if (computerScore == 5) {
        return alert("You lose... The final score is: \nYou: " + playerScore + "\nComputer: " + computerScore);
    } else return alert("It's a tie...");    
}

