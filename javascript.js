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