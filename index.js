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
    
    playerSelection = prompt("Choose: Rock, Paper, or Scissors?").toLowerCase();
    computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        return ("It's a tie! You both chose " + playerSelection + ".");
    } else if (playerSelection === "rock" && computerSelection === "paper" ||
                playerSelection === "paper" && computerSelection === "scissors" ||
                playerSelection === "scissors" && computerSelection === "rock") {
                    computerScore += 1;
                    onsole.log("Computer wins! " + computerSelection + " beats " + playerSelection)
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
                playerSelection === "paper" && computerSelection === "rock" ||
                playerSelection === "scissors" && computerSelection === "paper") {
                    playerScore += 1;
                    console.log("You win! " + playerSelection + " beats " + computerSelection);
    } else {
        console.log("Input error. Please check your spelling.")
    }
}


function game() {
    playRound(playerSelection, computerSelection);

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