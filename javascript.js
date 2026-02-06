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
    const humanResult = document.querySelector(".humanResult");
    const computerResult = document.querySelector(".computerResult");
    const humanCount = document.querySelector(".humanScore");
    const computerCount = document.querySelector(".computerScore");
    const winner = document.querySelector(".winner");

    const rockBtn = document.querySelector(".rockBtn");
    const paperBtn = document.querySelector(".paperBtn");
    const scissorsBtn = document.querySelector(".scissorsBtn");
    const restartBtn = document.querySelector(".restartBtn");

    rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
    paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
    scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));
    restartBtn.addEventListener("click", () => location.reload());

    function playRound(humanChoice, computerChoice) {

        humanChoice = humanChoice.toLowerCase();
        counter = humanScore + computerScore;

        if (humanChoice === "rock" && computerChoice === "paper") {
            humanResult.textContent = "You chose: " + humanChoice;
            computerResult.textContent = "Computer chose: " + computerChoice;
            result.textContent = "paper beats rock"
            computerScore = ++computerScore; 
            humanCount.textContent = "Your Score: " + String(humanScore);
            computerCount.textContent = "Computer's Score: " + String(computerScore);  
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanResult.textContent = "You chose: " + humanChoice;
            computerResult.textContent = "Computer chose: " + computerChoice;
            result.textContent = "rock beats scissors"
            humanScore = ++humanScore;
            humanCount.textContent = "Your Score: " + String(humanScore);
            computerCount.textContent = "Computer's Score: " + String(computerScore);
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            humanResult.textContent = "You chose: " + humanChoice;
            computerResult.textContent = "Computer chose: " + computerChoice;
            result.textContent = "paper beats rock"
            humanScore = ++humanScore;
            humanCount.textContent = "Your Score: " + String(humanScore);
            computerCount.textContent = "Computer's Score: " + String(computerScore);
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            humanResult.textContent = "You chose: " + humanChoice;
            computerResult.textContent = "Computer chose: " + computerChoice;
            result.textContent = "scissors beats paper"
            computerScore = ++computerScore; 
            humanCount.textContent = "Your Score: " + String(humanScore);
            computerCount.textContent = "Computer's Score: " + String(computerScore);
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            humanResult.textContent = "You chose: " + humanChoice;
            computerResult.textContent = "Computer chose: " + computerChoice;
            result.textContent = "rock beats scissors"
            computerScore = ++computerScore; 
            humanCount.textContent = "Your Score: " + String(humanScore);
            computerCount.textContent = "Computer's Score: " + String(computerScore);
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanResult.textContent = "You chose: " + humanChoice;
            computerResult.textContent = "Computer chose: " + computerChoice;
            result.textContent = "scissors beats paper"
            humanScore = ++humanScore;
            humanCount.textContent = "Your Score: " + String(humanScore);
            computerCount.textContent = "Computer's Score: " + String(computerScore);
        } else {
            humanResult.textContent = "You chose: " + humanChoice;
            computerResult.textContent = "Computer chose: " + computerChoice;
            result.textContent = "It's a draw!"
            humanCount.textContent = "Your Score: " + String(humanScore);
            computerCount.textContent = "Computer's Score: " + String(computerScore);
        }

        if (humanScore == 5 && (humanScore > computerScore)) {
            winner.textContent = "Congratulations! You win";
        } else if (computerScore == 5 && (computerScore > humanScore)) {
            winner.textContent = "You lost. Too bad";
        }

        function dialogBox() {
            alert("Game Over")
            location.reload();
        }
        
        if (humanScore == 5 && (humanScore > computerScore)) {
            rockBtn.addEventListener("click", dialogBox);
            paperBtn.addEventListener("click", dialogBox);
            scissorsBtn.addEventListener("click", dialogBox);
        } else if (computerScore == 5 && (computerScore > humanScore)) {
            rockBtn.addEventListener("click", dialogBox);
            paperBtn.addEventListener("click", dialogBox);
            scissorsBtn.addEventListener("click", dialogBox);
        }
    }
}

playGame()