let choices = ['Rock', 'Paper','Scissors'];

function getComputerChoice () {
    let computerChoice = choice [Math.floor (Math.random ()*  choices.lenth)]
    return computerChoice;
};

function playRound(playerChoice, computerChoice) {
    playerChoice = prompt("Please choose Rock, Paper, or Scissors.");
    if (playerChoice === computerChoice) {
        return "Tie!";}
    else if (playerChoice==='Rock' && computerChoice==='Scissor') ||
    (playerChoice==='Paper' && computerChoice==='Rock') ||
    (playerChoice==='Scissor' && computerChoice==='Paper')}
        return 'You win!';}
    else{ 
        return 'You lose!';
    }
    }
