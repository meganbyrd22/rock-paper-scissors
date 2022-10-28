const choices=['Rock', 'Paper', 'Scissors']
const playerChoice = prompt('Please choose Rock, Paper, or Scissors.');
const computerChoice= (getComputerChoice);

let playerScore=0
let computerScore=0
let roundWinner=''

function playRound(playerChoice, computerChoice){
    
    if (playerChoice === computerChoice) {roundWinner='tie';}
    
    else if (playerChoice==='ROCK' && computerChoice ==='SCISSORS') {
    roundWinner='player';}
    
    else if (playerChoice ==='PAPER' && computerChoice ==='ROCK') {
    roundWinner='player';}
        
    else if (playerChoice ==='SCISSORS' && computerChoice ==='PAPER'){
    roundWinner='player';}
    else{ 
    roundWinner='computer';}
    }

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

function showWinner() {
    if (roundWinner ==='player')
    return('You win!');
    else if (roundWinner ==='computer') return ('You lose!')
    else return('Tie, no one scores!')}

function updateScore(){ 
    for (let i = 0; i < 5; i++)
    {if  (showWinner ==='You win!'){ (playerScore)++}
    else if (showWinner==='You lose!'){(computerScore)++}
    }
}

function game(){
    if (updateScore= (playerScore)++ || (computerScore)++)
    return (getElementById(Player-Score(playerScore))) , (getElementById(Computer-Score (computerScore)))
}
