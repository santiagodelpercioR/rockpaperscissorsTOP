function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    if (num == 0){
        return "rock";
    }
    else if (num == 1){
        return "paper";
    }
    else if (num == 2){
        return "scissors";
    }
}

function playRound(humanChoice){
    
    const computerChoice = getComputerChoice();

    if (humanChoice == computerChoice){
        result.textContent = "Draw";
    }
    else if (humanChoice == "rock"){
        if(computerChoice == "scissors"){
            result.textContent = "You won, rock beats scissors";
            humanScore++;
        }
        else{
            result.textContent = "You lost, paper beats rock";
            computerScore++;
        }
    }
    else if (humanChoice == "paper"){
        if(computerChoice == "scissors"){
            result.textContent = "You lost, scissors beats paper";
            computerScore++;
        }
        else{
            result.textContent = "You won, paper beats rock";
            humanScore++;
        }
    }
    else if (humanChoice == "scissors"){
        if(computerChoice == "paper"){
            result.textContent = "You won, scissors beats paper";
            humanScore++;
        }
        else{
            result.textContent = "You lost, rock beats scissors";
            computerScore++;
        }
    } 
    runningScore.textContent = `Human Score = ${humanScore}. Computer Score = ${computerScore}.`;
    checkGameEnd();
}

function checkGameEnd() {
    if (humanScore === 5) {
        alert("Congratulations! You won the game.");
        disableButtons();
    } else if (computerScore === 5) {
        alert("Game over! The computer won.");
        disableButtons();
    }
}

function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

const body = document.querySelector('body');

// Creo un div con los 3 botones 
const buttons = document.createElement('div');
const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button');
rockButton.textContent = "rock";
paperButton.textContent = "paper";
scissorsButton.textContent = "scissors";
buttons.appendChild(rockButton);
buttons.appendChild(paperButton);
buttons.appendChild(scissorsButton);
body.appendChild(buttons);

// Creo un div de resultados y un div de puntaje
const result = document.createElement("div");
const runningScore = document.createElement("div");
body.appendChild(runningScore);
body.appendChild(result);

// Creo los puntajes
let humanScore = 0;
let computerScore = 0;

runningScore.textContent = `Human Score = 0. Computer Score = 0.`

rockButton.onclick = (event) => {
    playRound('rock');
};

paperButton.onclick = (event) => {
    playRound('paper');
};

scissorsButton.onclick = (event) => {
    playRound('scissors');
};









