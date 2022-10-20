let choices = ['Rock', 'Paper','Scissors'];

function getComputerChoice () {
    let computerChoice = choice [Math.floor (Math.random ()*  choices.lenth)]
    return computerChoice;
};

function playerChoice() {
    let playerChoice = prompt('Please choose rock, paper, or scissor.').toLowerCase();
    return playerChoice;
}