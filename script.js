let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

// const btnPlay = document.querySelector("#btnPlay");
// btnPlay.addEventListener("click", game);

const playRock = document.querySelector("#rock");
const playPaper = document.querySelector("#paper");
const playScissors = document.querySelector("#scissors");
const bgImage = document.querySelector("html");

playRock.addEventListener("click", () => {bgImage.style.cssText = "background-image: url(https://i.redd.it/ou2vigd2ttk11.jpg)", playRound("rock")});
playPaper.addEventListener("click", () => {bgImage.style.cssText = "background-image: url(https://media.tumblr.com/tumblr_ledezyKF7x1qzfj78.png)", playRound("rock")});
playScissors.addEventListener("click", () => {bgImage.style.cssText = "background-image: url(https://swsca-production.s3.amazonaws.com/uploads/attachments/17/edward-final-blog-post.jpg?1337098664)", playRound("rock")});

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

const computerWeapon = document.querySelector("#computer-weapon");
const result = document.querySelector("#result");
const score = document.querySelector("#score");
const winner = document.querySelector("#winner");
const playAgain = document.querySelector("#reload");

function playRound(playerSelection, computerSelection) { //plays one round
    computerSelection = computerPlay();

    if (playerSelection === computerSelection) { //determines winner by comparing the player's and computer's plays
        result.textContent = `It's a tie! You both chose ${computerSelection}`;
    } else if (playerSelection === "rock" && computerSelection === "paper" ||
                playerSelection === "paper" && computerSelection === "scissors" ||
                playerSelection === "scissors" && computerSelection === "rock") {
                    computerScore ++ ; //increments the computer's score by 1
                    computerWeapon.textContent = `Computer chose ${computerSelection}!`
                    result.textContent = `Computer wins! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
                playerSelection === "paper" && computerSelection === "rock" ||
                playerSelection === "scissors" && computerSelection === "paper") {
                    playerScore ++ ; //increments the player's score by 1
                    result.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
    }
    score.textContent = `Player score: ${playerScore} | Computer score: ${computerScore}`;  //reports the running score of the game in the console

    if (playerScore == 5) {
        winner.textContent = "Congratulations! You win!";
        playAgain.style.cssText = "display: block";
        playAgain.addEventListener("click", () => {location.reload()});
        playRock.disabled = true;
        playPaper.disabled = true;
        playScissors.disabled = true;
        bgImage.style.cssText = "background-image: url(https://cdn5.vectorstock.com/i/1000x1000/67/24/winner-label-or-sticker-vector-28196724.jpg)";
    } else if (computerScore == 5) {
        winner.textContent = "You lose! Try again."
        playAgain.style.cssText = "display: block";
        playAgain.addEventListener("click", () => {location.reload()});
        playRock.disabled = true;
        playPaper.disabled = true;
        playScissors.disabled = true;
        bgImage.style.cssText = "background-image: url(https://previews.123rf.com/images/carmendorin/carmendorin1308/carmendorin130800356/21873166-grunge-rubber-stamp-with-word-loser-vector-illustration.jpg)";        
    }
}