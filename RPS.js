for (let i = 0; i < 5; i++ ){
    let playerScore=0
    let computerScore=0
    let roundWinner=''

    function getComputerChoice () {
        let computerChoice = choice [Math.floor (Math.random ()*  choices.lenth)]
        return computerChoice;

    function game(playRound){if  (roundWinner ==='player'){ (playerScore)++}
    else if (roundWinner==='computer'){(computerScore)++}
    else (){return'Tie! No one scores'}

    console.log('Player: ${playerScore}','Computer: ${computerScore}')

    function playRound           (playerChoice, computerChoice) {playerChoice = prompt("Please choose Rock, Paper, or Scissors.");
        if (playerChoice === computerChoice) {
            roundWinner='tie'}
    
            else if (playerChoice==='Rock' && computerChoice ==='Scissor') {
            roundWinner='player'}
    
            else if (playerChoice ==='Paper' && computerChoice ==='Rock') {
            roundWinner='player'}
        
            else if (playerChoice ==='Scissor' && computerChoice ==='Paper'){
            roundWinner='player';}
            else{ 
            roundWinner='computer';
        }
        }
    }