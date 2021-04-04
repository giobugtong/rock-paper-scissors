let playerSelection;
let computerSelection;
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
    
    playerSelection = prompt("Choose: Rock, Paper, or Scissors?");
    computerSelection = computerPlay();

    if (playerSelection.toLowerCase() === computerSelection) {
        return ("It's a tie! You both chose " + playerSelection + ".");
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper" ||
                playerSelection.toLowerCase() === "paper" && computerSelection === "scissors" ||
                playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
                    return (1);
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors" ||
                playerSelection.toLowerCase() === "paper" && computerSelection === "rock" ||
                playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
                    return (2);
    } else {
        return ("Input error. Please check your spelling.")
    }
}

function addScore(playRound) {
    let score = "Player score: " + playerScore + " | " + "Computer score: " + computerScore;
    if (playRound === 1) {
        computerScore += 1;
        console.log("Computer wins! " + computerSelection + " beats " + playerSelection.toLowerCase());
        console.log(score);
    } else if (playRound === 2) {
        playerScore += 1;
        console.log("You win! " + playerSelection.toLowerCase() + " beats " + computerSelection);
        console.log(score);
    } else {
        console.log(score);
    }
}

function game() {
    

    playRound(playerSelection, computerSelection);
    addScore(playRound);

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