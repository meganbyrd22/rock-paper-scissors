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
function getComputerChoice() {let computerChoice = Math.floor(Math.random()*  choices.length);
return (computerChoice)
    };

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
