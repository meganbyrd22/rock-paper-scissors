const choices=['Rock', 'Paper', 'Scissors']
const computerChoice= (getComputerChoice);

let playerScore=0
let computerScore=0

//get player choice from button click
// playerChoice 
function getPlayerChoice(){
    return playerChoice;
} 
btnRock.addEventListener('click',() =>  getPlayerChoice('ROCK')),
//{
   //playerChoice = 'ROCK')
   //playRound()})

btnPaper.addEventListener('click', () => 
    getPlayerChoice('PAPER'));
    //playRound()})
    
btnScissors.addEventListener('click', () =>
    getPlayerChoice = ('SCISSORS'));
    //playRound()})

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
    
    else if (playerChoice==='ROCK' && computerChoice ==='SCISSORS') {
    roundWinner ='player'}
    
    else if (playerChoice ==='PAPER' && computerChoice ==='ROCK') {
    roundWinner ='player'}
        
    else if (playerChoice ==='SCISSORS' && computerChoice ==='PAPER'){
    roundWinner='player'}

    else{ 
    roundWinner ='computer'};

    return roundWinner;
    }

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
