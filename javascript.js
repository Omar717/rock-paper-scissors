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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        counter = humanScore + computerScore;
        if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! paper beats rock");
            return computerScore = ++computerScore;    
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! rock beats scissors");
            return humanScore = ++humanScore;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! paper beats rock");
            return humanScore = ++humanScore;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose! scissors beats paper");
            return computerScore = ++computerScore;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose! rock beats scissors");
            return computerScore = ++computerScore;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! scissors beats paper");
            return humanScore = ++humanScore;
        } else {
            console.log("It's a draw!");
        }
    }

    const rockBtn = document.createElement("button");
    const paperBtn = document.createElement("button");
    const scissorsBtn = document.createElement("button");

    const container = document.querySelector(".container");

    rockBtn.textContent = "Rock";
    paperBtn.textContent = "Paper";
    scissorsBtn.textContent = "Scissors";

    container.appendChild(rockBtn);
    container.appendChild(paperBtn);
    container.appendChild(scissorsBtn);

    rockBtn.addEventListener("click", playRound("rock", getComputerChoice));
    paperBtn.addEventListener("click", playRound("paper", getComputerChoice));
    scissorsBtn.addEventListener("click", playRound("scissors", getComputerChoice));

    if (humanScore > computerScore) {
        console.log("Congratulations! You win");
    } else if (computerScore > humanScore) {
        console.log("You lost. Too bad");
    } else {
        console.log("It's a draw");
    }
}

playGame()