const choices=['Rock', 'Paper', 'Scissors']
const computerChoice= (getComputerChoice);

let playerScore=0
let computerScore=0


// playerChoice using querySelectorAll on buttons
const buttons = document.querySelectorAll('buttons');
buttons.forEach((button) => 
    button.addEventListener('click', () => {
         playerChoice = (button.id);
         playRound;
    }))

//get computer choice from random selection
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
         return 'ROCK'
        case 1:
         return 'PAPER'
        case 2:
         return 'SCISSORS'
    }
}

//play one round    
function playRound(computerChoice, playerChoice){
    
    if (playerChoice === computerChoice) {roundWinner ='tie'}
    
    else if 
    ((playerChoice==='ROCK' && computerChoice ==='SCISSORS') || 
    (playerChoice ==='PAPER' && computerChoice ==='ROCK') || 
    (playerChoice ==='SCISSORS' && computerChoice ==='PAPER'))  
    {roundWinner ='player'}
    
    else {roundWinner ='computer'};

    return roundWinner;

    }
    showWinner(roundWinner);

//print a winner message 
function showWinner() {
    if (roundWinner ==='player'){
        return winnerMessage.textContent= "You win!";
    }
    else if (roundWinner ==='computer'){
        return winnerMessage.textContent="You lose!";
    }

    else {return winnerMessage.textContent="It's a tie!";
}
}
    updateScore(roundWinner, showWinner);

//update the score
function updateScore(){ 
    {if  (winnerMessage ==='You win!'){ (playerScore)++}
    else if (winnerMessage ==='You lose!'){(computerScore)++}
    }
    return playerScoreText.textContent = `Player: ${playerScore}`,computerScoreText.textContent= `Computer:${computerScore}`;
}
//show the total score 
//function game(){
   // if (updateScore= (playerScore)++ || (computerScore)++)
   // return (getElementById(Player-Score(playerScore))) + (getElementById(Computer-Score (computerScore)))
//}
