const choices=['Rock', 'Paper', 'Scissors']
const computerChoice= (getComputerChoice);
//const playerChoice= (getPlayerChoice);

let playerScore=0
let computerScore=0


// get playerChoice from button 
btnRock.addEventListener('click', () => {
     playerChoice ='ROCK';
     playRound(playerChoice, computerChoice)})


btnPaper.addEventListener('click', ()=> {
    playerChoice = 'PAPER';
    playRound(playerChoice, computerChoice))
    
btnScissors.addEventListener('click', () => {
   playerChoice = 'SCISSORS';
   playRound (playerChoice, computerChoice))
    
//get playerChoice from results of eventListener
 //function handleClick(){
    //playerChoice = (e);
   // playRound(playerChoice, computerChoice)}
    //(playerScore < 5 && computerScore < 5)
    //return playerChoice;
    //else return 'Game over!' };
 

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
    for (let i = 0; i < 5; i++)
    {if (playerChoice === computerChoice) {return roundWinner ='tie'}
    
    else if 
    ((playerChoice==='ROCK' && computerChoice ==='SCISSORS') || 
    (playerChoice ==='PAPER' && computerChoice ==='ROCK') || 
    (playerChoice ==='SCISSORS' && computerChoice ==='PAPER'))  
    {return roundWinner ='player'}
    
    else {return roundWinner ='computer'};
    }
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
//update the score + display current score
function updateScore(){ 
    {if  (winnerMessage ==='You win!'){ (playerScore)++}
    else if (winnerMessage ==='You lose!'){(computerScore)++}
    }
    return playerScoreText.textContent = `Player: ${playerScore}`,computerScoreText.textContent= `Computer:${computerScore}`;
}

