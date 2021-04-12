let playerSelection;
let computerSelection;
let score;
let playerScore = 0;
let computerScore = 0;

const btnPlay = document.querySelector("#btnPlay");
btnPlay.addEventListener("click", game);

function computerPlay() { //returns random number which would correspond to the computer's play
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return ("rock");
    } else if (choice === 1) {
        return ("paper");
    } else if (choice === 2) {
        return ("scissors");
    }
}

function playRound(playerSelection, computerSelection) { //plays one round
    score = "Player score: " + playerScore + " | " + "Computer score: " + computerScore;
    playerSelection = prompt("Choose: Rock, Paper, or Scissors?").toLowerCase();
    computerSelection = computerPlay();
    
    if (playerSelection === computerSelection) { //determines winner by comparing the player's and computer's plays
        console.log("It's a tie! You both chose " + playerSelection + ".");
    } else if (playerSelection === "rock" && computerSelection === "paper" ||
                playerSelection === "paper" && computerSelection === "scissors" ||
                playerSelection === "scissors" && computerSelection === "rock") {
                    computerScore ++ ; //increments the computer's score by 1
                    console.log("Computer wins! " + computerSelection + " beats " + playerSelection)
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
                playerSelection === "paper" && computerSelection === "rock" ||
                playerSelection === "scissors" && computerSelection === "paper") {
                    playerScore ++ ; //increments the player's score by 1
                    console.log("You win! " + playerSelection + " beats " + computerSelection);
    } else {
        console.log("Input error. Please check your spelling.") //error message in case of mispelled word, no scores awarded
    }
 return `Player score: ${playerScore} | Computer score: ${computerScore}`;  //reports the running score of the game in the console
}

function game() { //main algorithm that starts the game
    
    alert("Play against a computer in a best-of-five game of Rock Paper Scissors. Good luck!"); //welcome message upon page open/refresh
    
    let i;
    for (i = 0; i < 5; i++) { //loops through 5 rounds
        console.log(playRound(playerSelection, computerSelection));
    }

    if (playerScore === computerScore) { //determines the winner of the game after 5 rounds as dictated by the for loop above
        alert("Game over! It's a tie!");
    } else if (playerScore > computerScore) {
        alert("Game over! You win!");
    } else if (computerScore > playerScore) {
        alert("Game over! You lose!")
    }
}