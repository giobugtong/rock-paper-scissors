let playerSelection;
let computerSelection;
let score;
let playerScore = 0;
let computerScore = 0;


console.log(game());

function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return ("rock");
    } else if (choice === 1) {
        return ("paper");
    } else if (choice === 2) {
        return ("scissors");
    }
}

function playRound(playerSelection, computerSelection) {
    score = "Player score: " + playerScore + " | " + "Computer score: " + computerScore;
    playerSelection = prompt("Choose: Rock, Paper, or Scissors?").toLowerCase();
    computerSelection = computerPlay();
    
    if (playerSelection === computerSelection) {
        console.log("It's a tie! You both chose " + playerSelection + ".");
    } else if (playerSelection === "rock" && computerSelection === "paper" ||
                playerSelection === "paper" && computerSelection === "scissors" ||
                playerSelection === "scissors" && computerSelection === "rock") {
                    computerScore ++ ;
                    console.log("Computer wins! " + computerSelection + " beats " + playerSelection)
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
                playerSelection === "paper" && computerSelection === "rock" ||
                playerSelection === "scissors" && computerSelection === "paper") {
                    playerScore ++ ;
                    console.log("You win! " + playerSelection + " beats " + computerSelection);
    } else {
        console.log("Input error. Please check your spelling.")
    }
 return `Player score: ${playerScore} | Computer score: ${computerScore}`;  
}


function game() {
    
    
    
    let i;
    for (i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
    }

    if (playerScore === computerScore) {
        alert("Game over! It's a tie!");
    } else if (playerScore > computerScore) {
        alert("Game over! You win!");
    } else if (computerScore > playerScore) {
        alert("Game over! You lose!")
    }
}
    


// get human player's input, case-sensitive - ok
// get computerSelection from computerPlay - ok
// 
    // 
    //
// return a string for the human player saying whether they won or lost
// 
//
//
//
//
//
// rock > scissors > paper > rock
// 
//
//
//
//
//
//
//