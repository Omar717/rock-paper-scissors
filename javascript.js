function getComputerChoice() {
    if (Math.floor(Math.random()*3) === 0) {
        return 'rock';
    } else if (Math.floor(Math.random()*3) === 1) {
        return 'paper';
    }  else {
        return 'scissors';
    }
}

function getHumanChoice() {
    let response = prompt("Choose rock, paper or scissors");
    return response;
} 

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! paper beats rock");
        return ++computerScore;    
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! rock beats scissors");
        return ++humanScore;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! paper beats rock");
        return ++humanScore;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! scissors beats paper");
        return ++computerScore;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! rock beats scissors");
        return ++computerScore;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! scissors beats paper");
        return ++humanScore;
    } else {
        console.log("It's a draw!")
    }        
}