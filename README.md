# rock-paper-scissors
My first TOP JavaScript project

  The conditions to finishing this project are to write a program in JavaScript that will play a game of rock paper scissors with the computer. The computer needs to randomly pick one of the three options, have the player choose then compare the choices together and decide a winner. The program needs to keep score and declare a winner after either the player or computer reaches five points.

  To have the computer randomly choose I created an array with the three choices, then made a function that would return a selection using [Math.floor(Math.random() * choices.length)]. Then I created two variables, one called playerScore and another was computerScore.
I then created another function called playRound() that prompted the player to pick a choice and call the computer's choice. Then I went throught the possible outcomes (if its a tie, if player chooses rock and computer chooses paper, ect.). Depending on who won that round either playerScore or computerScore would increment. This function made it so the player's input would be case insensitive (using playerSelection.toLowerCase()), and also acounted for the possibility if the player mispelled the choice.

  Next, I created a function called game(). It starts off using a while loop with the condition being if the playerScore or computerScore is less then five it will continue to call the function playRound(). Under it there is an if-else statement stating that if the player or computer score is equal to five then it will return an alert saying you win or you lose.
  
  My hope is to return to this project later and stylize it more with HTML/CSS and make it more interactive.
