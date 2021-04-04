
let computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;
let score = "Player score: " + playerScore + " | Computer score: " + computerScore;

console.log(game())

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
    
    
    if (playerSelection === computerSelection) {
        return ("It's a tie! You both chose " + playerSelection + ".");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return ("Computer wins! Paper beats rock.");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return("You win! Rock beats scissors.");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return ("You win! Paper beats rock.");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return ("Computer wins! Scissors beats paper.");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return ("Computer wins! Rock beats scissors.");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return ("You win! Scissors beats paper.");
    } else {
        return ("Input error. Please check your spelling.")
    }
}

function game() {
    let playerSelection = prompt("Choose: Rock, Paper, or Scissors?").toLowerCase();
    
    function keepScore(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(score);
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        playerScore = playerScore + 1;
        console.log(score);
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        computerScore = computerScore + 1;
        console.log(score);
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore = playerScore + 1;
        console.log(score);
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore = computerScore + 1;
        console.log(score);
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore = computerScore + 1;
        console.log(score);
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore = playerScore + 1;
        console.log(score);
    } else {
        console.log("Input error. Please check your spelling.");
        console.log(score);
    }
}
    console.log(playRound(playerSelection, computerSelection));
    console.log(keepScore(playerSelection, computerSelection))

}



    

    // get human player's input, case-sensitive
// get computerSelection from computerPlay
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