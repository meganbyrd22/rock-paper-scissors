let choices = ['Rock', 'Paper','Scissors'];

function getComputerChoice () {
    let computerChoice = choice [Math.floor (Math.random ()*  choices.lenth)]
    return computerChoice;
};

function playRound(playerChoice, computerChoice) {
    playerChoice = prompt("Please choose Rock, Paper, or Scissors.");
    if (playerChoice === computerChoice) {
        return "Tie!";}

    else if (playerChoice==='Rock' && computerChoice ==='Scissor') {
    return "You win!"}

    else if (playerChoice ==='Paper' && computerChoice ==='Rock') {
        return "You win!"}
    
    else if (playerChoice ==='Scissor' && computerChoice ==='Paper'){
        return "You win!";}
    else{ 
        return "You lose!";
    }
    }

for (let i = 0; i < 5; i++ ){
    let playerScore=0
    let computerScore=0
    let roundWinner=''
    function playRound(playerChoice, computerChoice) {
        playerChoice = prompt("Please choose Rock, Paper, or Scissors.");
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
        updateScore(playerScore || computerScore)
        }  
    function updateScore(){
        if (roundWinner='player'){ (playerScore)++}
        else ((computerScore)++)}
    let showComputerScorePara=document.getElementById('playerScore')
    let showPlayerScorePara=document.getElementById('computerScore')

   showPlayerScorePara.textcontent='Player: ${playerScore}'
   showComputerScorePara.textcontent= 'Computer:${computerScore}';
}