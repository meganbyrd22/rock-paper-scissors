let choices = ['Rock', 'Paper','Scissors'];

function getComputerChoice () {
    let computerChoice = choice [Math.floor (Math.random ()*  choices.lenth)]
    return computerChoice;
};


let playerChoice = prompt('Please choose rock, paper, or scissor.').toLowerCase();


function playRound(playerChoice, computerChoice) {
    console.log(playerChoice);
    console.log(computerChoice);
    if playerChoice === computerChoice {
        return "Tie!";}
    else if playerChoice==='Rock' && computerChoice==='Scissor' ||
    playerChoice==='Paper' && computerChoice==='Rock' ||
    playerChoice==='Scissor' && computerChoice==='Paper'{
        return 'You win!';}
    else{ 
        return 'You lose!';
    }
    }