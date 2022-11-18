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
    
    if (playerChoice === computerChoice) {return roundWinner ='tie'}
    
    else if 
    ((playerChoice==='ROCK' && computerChoice ==='SCISSORS') || 
    (playerChoice ==='PAPER' && computerChoice ==='ROCK') || 
    (playerChoice ==='SCISSORS' && computerChoice ==='PAPER'))  
    {return roundWinner ='player'}
    
    else {return roundWinner ='computer'};
    }
    

//print a winner message 
function showWinner()
    {if (roundWinner ==='player'){
        return winnerMessage.textContent= "You win!";
    }
    else if (roundWinner ==='computer'){
        return winnerMessage.textContent="You lose!";
    }

    else {return winnerMessage.textContent="It's a tie!";
}
}
//update the score
function updateScore(){ 
    {if  (winnerMessage ==='You win!'){ (playerScore)++}
    else if (winnerMessage ==='You lose!'){(computerScore)++}
    }
    return playerScoreText.textContent = `Player: ${playerScore}`,computerScoreText.textContent= `Computer:${computerScore}`;
}

//show the total score 
function game()
    for (let i = 0, i < 5; i++){{
    if (updateScore= (playerScore)++ || (computerScore)++)
    return (getElementById(Player-Score(playerScore))) + (getElementById(Computer-Score (computerScore)))
}}
