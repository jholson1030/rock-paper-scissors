const startGame = 

const choices = ["rock", "paper", "scissors"];
var playerScore = 0;
var computerScore = 0;


// Update the DOM with computer selection
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}


function playRound() {
    
    const playerSelection = 
    const computerSelection = getComputerChoice();

    if (computerSelection == playerSelection) {
        
    } else if (computerSelection == "rock" && playerSelection.toLowerCase() == "paper") {
        
        playerScore++;
        
    } else if (computerSelection == "rock" && playerSelection.toLowerCase() == "scissors") {
        
        computerScore++;
        
    } else if (computerSelection == "scissors" && playerSelection.toLowerCase() == "paper") {
        
        computerScore++;
        
    } else if (computerSelection == "scissors" && playerSelection.toLowerCase() == "rock") {
        
        playerScore++;
        
    } else if (computerSelection == "paper" && playerSelection.toLowerCase() == "rock") {
        
        computerScore++;
        
    } else if (computerSelection == "paper" && playerSelection.toLowerCase() == "scissors") {
       
        playerScore++;
        
    }   
    

}

function game() {
    while (playerScore < 5 && computerScore < 5) {
        playRound();
    }
    if (playerScore == 5) {
        
    } else if (computerScore == 5) {
        
    } 
}

function startGame() {
    // Will begin the game
}

function resetGame() {
    // Will restart the game
}