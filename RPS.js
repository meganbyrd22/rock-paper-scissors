const choices=['Rock', 'Paper', 'Scissors']
const computerChoice= getComputerChoice();
//const playerChoice= (getPlayerChoice);

let playerScore = 0
let computerScore = 0

//UI variables 
const buttons = document.getElementsByClassName("buttons")
const btnRock = document.getElementById("btnRock")
const btnPaper = document.getElementById("btnPaper")
const btnScissors = document.getElementById("btnScissors")
const scoreboard = document.getElementsByClassName ("scoreboard")
const playerScoreText = document.getElementById("playerScoreText")
const computerScoreText = document.getElementById("computerScoreText")
const winnerMessage = document.getElementById("winnerMessage")

// get playerChoice from button and initialize playRound 
btnRock.addEventListener('click', () => {
     playerChoice ='ROCK';
     playRound(playerChoice, computerChoice)})

btnPaper.addEventListener('click', ()=> {
    playerChoice = 'PAPER';
    playRound(playerChoice, computerChoice)})
    
btnScissors.addEventListener('click', () => {  playerChoice = 'SCISSORS';
   playRound (playerChoice, computerChoice)})
 
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
    playRound(playerChoice, computerChoice);
}

//play one round    
function playRound(computerChoice, playerChoice){
    if (playerChoice === computerChoice) {roundWinner ='tie'
    return winnerMessage.textContent =`It's a tie!`}
    
    else if 
    ((playerChoice==='ROCK' && computerChoice ==='SCISSORS') || 
    (playerChoice ==='PAPER' && computerChoice ==='ROCK') || 
    (playerChoice ==='SCISSORS' && computerChoice ==='PAPER'))  
    {++playerScore;
    roundWinner ='player';
    playerScoreText.textContent = `Player: ${playerScore}`;
    computerScoreText.textContent =  `Computer:${computerScore}`
    return winnerMessage.textContent = 'You win!'
    }
    
    else {++computerScore ;
        roundWinner ='computer';
        playerScoreText.textContent = `Player: ${playerScore}`;
        computerScoreText.textContent =  `Computer:${computerScore}`
        return winnerMessage.textContent ='You lose!'
    }
    }

function gameOver ()
    if (playerScore === 5 || computerScore ===5) {
        return gameOverMessage = "Game over!"
    }
    //showWinner(roundWinner);

//print a winner message 
//function showWinner()
    //{if (roundWinner ==='player'){
        //return winnerMessage.textContent = 'You win!';
    //}
    //else if (roundWinner ==='computer'){
         //return winnerMessage.textContent ='You lose!';
    //}
   // else if (roundWinner === 'tie') {return winnerMessage.textContent ='It\'s a tie!';
    //}


//update the score + display current score IN HTML!!
//function updateScore(){ 
   // {if  (winnerMessage ==='You win!'){ (playerScore)++}
   // else if (winnerMessage ==='You lose!'){(computerScore)++}
   // }
    //return playerScoreText.textContent = `Player: ${playerScore}`,computerScoreText.textContent= `Computer:${computerScore}`;
//}

