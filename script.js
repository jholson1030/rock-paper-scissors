

const choices = ["rock", "paper", "scissors"];
var playerScore = 0;
var computerScore = 0;


// Update the DOM with computer selection
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}


// Turn these into functions with possible outcomes (2 each)
document.getElementById('rock').addEventListener('click', function () {
    const computerSelection = getComputerChoice();
    if (computerSelection == 'paper') {
        computerScore++;
        document.querySelector('.result').textContent = "You lose, paper covers rock.";
        document.querySelector('computer-score').textContent = `Computer's score is: ${computerScore}`;
    } else if (computerSelection == 'scissors') {
        playerScore++;
        document.querySelector('.result').textContent = "You win, rock crushes scissors.";
        document.querySelector('player-score').textContent = `Your score is: ${playerScore}`;
    } else document.querySelector('.result').textContent = "It's a tie, go again.";
});

document.getElementById('paper').addEventListener('click', function () {
    const computerSelection = getComputerChoice();
    if (computerSelection == 'rock') {
        playerScore++;
        document.querySelector('.result').textContent = "You win, paper covers rock.";
        document.querySelector('player-score').textContent = `Your score is: ${playerScore}`;
    } else if (computerSelection == 'scissors') {
        computerScore++;
        document.querySelector('.result').textContent = "You lose, scissors cuts paper.";
        document.querySelector('computer-score').textContent = `Computer's score is: ${computerScore}`;
    } else document.querySelector('.result').textContent = "It's a tie, go again.";
});

document.getElementById('scissors').addEventListener('click', function () {
    const computerSelection = getComputerChoice();
    if (computerSelection == 'rock') {
        computerScore++;
        document.querySelector('.result').textContent = "You lose, paper covers rock.";
        document.querySelector('computer-score').textContent = `Your score is: ${computerScore}`;
    } else if (computerSelection == 'paper') {
        playerScore++;
        document.querySelector('.result').textContent = "You win, scissors cuts paper.";
        document.querySelector('player-score').textContent = `Computer's score is: ${playerScore}`;
    } else document.querySelector('.result').textContent = "It's a tie, go again.";
});



/* function playRound() {
    
    var playerSelection;
    const computerSelection = getComputerChoice();

    if (computerSelection == playerSelection) {
        document.querySelector('.result').textContent = "It's a tie.";
    } else if (computerSelection == "rock" && playerSelection == playerPaper) {
        document.querySelector('.result').textContent = "You win, paper covers rock.";
        playerScore++;
        document.querySelector('player-score').textContent = `Your score is: ${playerScore}`;
    } else if (computerSelection == "rock" && playerSelection == playerScissors) {
        document.querySelector('.result').textContent = "You lose, rock crushes scissors.";
        computerScore++;
        document.querySelector('computer-score').textContent = `Your score is: ${computerScore}`;
    } else if (computerSelection == "scissors" && playerSelection == playerPaper) {
        document.querySelector('.result').textContent = "You lose, scissors cuts paper.";
        computerScore++;
        document.querySelector('computer-score').textContent = `Your score is: ${computerScore}`;
    } else if (computerSelection == "scissors" && playerSelection == playerRock) {
        document.querySelector('.result').textContent = "You win, rock crushes scissors.";
        playerScore++;
        document.querySelector('player-score').textContent = `Your score is: ${playerScore}`;
    } else if (computerSelection == "paper" && playerSelection == playerRock) {
        document.querySelector('.result').textContent = "You lose, paper covers rock.";
        computerScore++;
        document.querySelector('computer-score').textContent = `Your score is: ${computerScore}`;
    } else if (computerSelection == "paper" && playerSelection == playerScissors) {
        document.querySelector('.result').textContent = "You win, scissors cuts paper.";
        playerScore++;
        document.querySelector('player-score').textContent = `Your score is: ${playerScore}`;
    }   
    

} */

function game() {
    document.querySelector('.start-game').style.display = "none";
    while (playerScore < 5 && computerScore < 5) {
        playRound();
    }
    if (playerScore == 5) {
        document.querySelector('.result').textContent = "You're the winner!!!";
        document.querySelector('.reset-game').style.display = "flex";
    } else if (computerScore == 5) {
        document.querySelector('.result').textContent = "You are a total loser..";
        document.querySelector('.reset-game').style.display = "flex";
    } 
}


function resetGame() {
    // Will restart the game
}