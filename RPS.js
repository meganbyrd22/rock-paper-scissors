let choices=('Rock', 'Paper', 'Scissors')
let playerScore=0
let computerScore=0
let roundWinner=''

let playerChoice = prompt('Please choose Rock, Paper, or Scissors.');

function getComputerChoice(){
    let computerChoice = choices [Math.floor (Math.random ()*  choices.length)]
    return computerChoice};

function playRound(playerChoice, computerChoice){

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

function game(playRound)
    for (let i = 0; i < 5; i++) {
    {if  (roundWinner ==='player'){ (playerScore)++}
    else if (roundWinner==='computer'){(computerScore)++}
    else ()=>{return'Tie! No one scores'}
    }
    }
    console.log('Player: ${playerScore}','Computer: ${computerScore}')
