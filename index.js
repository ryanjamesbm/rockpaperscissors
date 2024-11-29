// getComputerChoice function
// Assign a random string value to a variable
// Test with console log
function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
// getHumanChoice function
// Will return the choice the user makes
function getHumanChoice(){
    let userInput = prompt("What's your hand");
    return userInput ? userInput.toLowerCase() : null;
}

let humanScore = 0;
let computerScore = 0;

// Function playRound
// Parameter humanChoice and computerChoice
// console log string for the round winner
// Increment either score based on who won

function playRound(){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    console.log("Computer chose: " + computerChoice)
    console.log("You chose: " + humanChoice)

    if (humanChoice == computerChoice) {
        console.log("It's a draw");
    } else if (humanChoice == "rock" & computerChoice == "scissors") {
        humanScore += 1;
        console.log("You won this round!");
    } else if (humanChoice == "paper" & computerChoice == "rock") {
        humanScore += 1;
        console.log("You won this round!");
    } else if (humanChoice == "scissors" & computerChoice == "paper") {
        humanScore += 1;
        console.log("You won this round!");
    } else {
        computerScore += 1;
        console.log("You lost this round");
    }
}
// Function playGame which calls playRound
// Move playround function and variables to be declared in here
// Play 5 rounds by calling playRound 5 times
function playGame(){
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}:`);
        playRound(); // Call playRound and update choices each round
        console.log("Your score is: " + humanScore + " The computer score is: " + computerScore);
    }
}

playGame()