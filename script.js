let playerScore = 0;
let computerScore = 0;
playGame();

function getComputerChoice() {
    const random = Math.floor(Math.random() * 3 + 1);
    switch(random) {
        case 1:
          return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function playSingleRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return "Tie!"
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        playerScore++;
        return "You Won! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        playerScore++;
        return "You Won! Scissors beats Paper";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        playerScore++;
        return "You Won! Paper beats Rock";
    } else {
        computerScore++;
        return "You Lost! "+ computerSelection + " beats " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    }
}

function playGame() {
    let i = 0;
    while(i<5) {
        let playerSelection = prompt("Rock, Paper, Scissors?");

        while (playerSelection.toLowerCase() !== "rock" && playerSelection.toLowerCase() !== "paper" && playerSelection.toLowerCase() !== "scissors") {
            playerSelection = prompt("Rock, Paper, Scissors?");
            if (playerSelection.toLowerCase() !== "rock" && playerSelection.toLowerCase() !== "paper" && playerSelection.toLowerCase() !== "scissors") {
                alert("Invalid input. Please enter 'Rock', 'Paper', or 'Scissors'.");
            }
        }

        const computerSelection = getComputerChoice();
        console.log("Round " + (i+1) +" : "+playSingleRound(playerSelection, computerSelection));
        i++;
    }
    
    if (playerScore > computerScore) {
        console.log("You Won the game! Congratulations!");
    } else if (playerScore === computerScore) {
        console.log("It's a Tie! Play again!");
    } else {
        console.log("You Lost the game! Try again!");
    }
}