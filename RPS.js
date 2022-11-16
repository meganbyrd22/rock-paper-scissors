const choices=['Rock', 'Paper', 'Scissors']
const computerChoice= (getComputerChoice);
const btnRock = document.getElementById('btnRock');
const btnPaper = document.getElementById('btnPaper');
const btnScissors = document.getElementById('btnScissors');

let playerScore=0
let computerScore=0
let roundWinner=''

btnRock.addEventListener('click', function(){
    playerChoice = 'ROCK';
    playRound();
    return (roundWinner)});

btnPaper.addEventListener('click', function(){
    playerChoice = 'PAPER';
    playRound();
    return (roundWinner)})

btnScissors.addEventListener('click', function(){
    playerChoice = 'SCISSORS';
    playRound();
    return (roundWinner)})
    
function playRound(computerChoice, playerChoice){
    
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
    if (roundWinner ==='player'){
        showWinner.textContent= 'You win!';
    }
    else if (roundWinner ==='computer'){
        showWinner.textContent='You lose!';
    }

    else {showWinner.textContent='It\'s a tie!';
}
}
function updateScore(){ 
    {if  (showWinner ==='You win!'){ (playerScore)++}
    else if (showWinner==='You lose!'){(computerScore)++}
    }
}

function game(){
    if (updateScore= (playerScore)++ || (computerScore)++)
    return (getElementById(Player-Score(playerScore))) + (getElementById(Computer-Score (computerScore)))
}
