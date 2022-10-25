let choices=['Rock', 'Paper', 'Scissors']

function playRound(playerChoice, computerChoice){
    let playerChoice = prompt('Please choose Rock, Paper, or Scissors.');
    let computerChoice= (getComputerChoice);

    if (playerChoice === computerChoice) {roundWinner='tie';}
    
    else if (playerChoice==='Rock' && computerChoice ==='Scissor') {
    roundWinner='player';}
    
    else if (playerChoice ==='Paper' && computerChoice ==='Rock') {
    roundWinner='player';}
        
    else if (playerChoice ==='Scissor' && computerChoice ==='Paper'){
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
    else return ('You lose!')}


function game(playRound)
let playerScore=0
let computerScore=0
let roundWinner=''
    for (let i = 0; i < 5; i++) {
    {if  (roundWinner ==='player'){ (playerScore)++}
    else if (roundWinner==='computer'){(computerScore)++}
    else ()=>{return'Tie! No one scores'}
    }
    }
    console.log('Player: ${playerScore}','Computer: ${computerScore}')
