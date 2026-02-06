function getComputerChoice() {
    if (Math.floor(Math.random()*3) === 0) {
        return 'rock';
    } else if (Math.floor(Math.random()*3) === 1) {
        return 'paper';
    }  else {
        return 'scissors';
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const result = document.querySelector(".result");
    const humanCount = document.querySelector(".humanScore");
    const computerCount = document.querySelector(".computerScore");
    const winner = document.querySelector(".winner");

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        counter = humanScore + computerScore;

        if (humanChoice === "rock" && computerChoice === "paper") {
            result.textContent = "You lose! paper beats rock";
            computerScore = ++computerScore; 
            humanCount.textContent = "Your Score: " + String(humanScore);
            computerCount.textContent = "Computer's Score: " + String(computerScore);  
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            result.textContent = "You win! rock beats scissors";
            humanScore = ++humanScore;
            humanCount.textContent = "Your Score: " + String(humanScore);
            computerCount.textContent = "Computer's Score: " + String(computerScore);
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            result.textContent = "You win! paper beats rock";
            humanScore = ++humanScore;
            humanCount.textContent = "Your Score: " + String(humanScore);
            computerCount.textContent = "Computer's Score: " + String(computerScore);
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            result.textContent = "You lose! scissors beats paper";
            computerScore = ++computerScore;
            humanCount.textContent = "Your Score: " + String(humanScore);
            computerCount.textContent = "Computer's Score: " + String(computerScore);
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            result.textContent = "You lose! rock beats scissors";
            computerScore = ++computerScore;
            humanCount.textContent = "Your Score: " + String(humanScore);
            computerCount.textContent = "Computer's Score: " + String(computerScore);
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            result.textContent = "You win! scissors beats paper";
            humanScore = ++humanScore;
            humanCount.textContent = "Your Score: " + String(humanScore);
            computerCount.textContent = "Computer's Score: " + String(computerScore);
        } else {
            result.textContent = "It's a draw!";
            humanCount.textContent = "Your Score: " + String(humanScore);
            computerCount.textContent = "Computer's Score: " + String(computerScore);
        }

        if (humanScore == 5) {
            return winner.textContent = "Congratulations! You win";
        } else if (computerScore == 5) {
            return winner.textContent = "You lost. Too bad";
        }

    }

    const rockBtn = document.querySelector(".rockBtn");
    const paperBtn = document.querySelector(".paperBtn");
    const scissorsBtn = document.querySelector(".scissorsBtn");

    rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
    paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
    scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));
}

playGame()