const choices=['Rock', 'Paper', 'Scissors']
const computerChoice= (getComputerChoice);

let playerScore=0
let computerScore=0
let roundWinner=''

btnRock.addEventListener('click',() => playRound(getComputerChoice(), 'ROCK'));
    console.log(roundWinner);

btnPaper.addEventListener('click', function(){
    playerChoice = 'PAPER';
    playRound();
    console.log(roundWinner)})

btnScissors.addEventListener('click', function(){
    playerChoice = 'SCISSORS';
    playRound();
    console.log(roundWinner)})
    
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
    if (roundWinner ==='player')
    return('You win!');
    else if (roundWinner ==='computer') return ('You lose!')
    else return('Tie, no one scores!')}

function updateScore(){ 
    {if  (showWinner ==='You win!'){ (playerScore)++}
    else if (showWinner==='You lose!'){(computerScore)++}
    }
}

function game(){
    if (updateScore= (playerScore)++ || (computerScore)++)
    return (getElementById(Player-Score(playerScore))) + (getElementById(Computer-Score (computerScore)))
}
