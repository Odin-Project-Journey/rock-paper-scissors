let PLAYS = ['Rock', 'Paper', 'Scissors'];
let COMPUTER_SCORE = 0;
let PLAYER_SCORE = 0;
const div = document.querySelector('div');
const para = document.querySelector('p');
const pScore = document.getElementById('player-score');
const pcScore = document.getElementById('pc-score');
const buttons = document.querySelectorAll('.btn');
function getRandomIndex(){
  return Math.floor(Math.random() * 3);
}

// Function called computerPlay that randomly returns 'Rock', 'Paper', or 'Scissors'
function computerPlay(){
  let pcPick = PLAYS[getRandomIndex()];
  return pcPick;
}

function playerPrompt(){
  let playerInput = ''
  let goodInput = false;
  while (!goodInput){
    playerInput = prompt("Type in Rock, Paper, or Scissors: ");
    playerInput = cleanUpInput(playerInput);
    if (PLAYS.includes(playerInput)){
      goodInput = true;
    } else {
      alert('Make sure your selection is spelled right.');
    }
  }
  return playerInput;
}

function cleanUpInput(input){
  return input[0].toUpperCase() + input.slice(1, input.length + 1).toLowerCase();

}

// Func tha takes 2 parameters the playerSelection and computerSelection and return a string that declares the winner
  // Make this func case-sensitive to fix the standarize the input
function playRound(playerSelect, compuSelect){
  if (playerSelect === compuSelect){
    return `It's a draw, you both had ${playerSelect.toLowerCase()}!`;
  } else if (playerSelect === 'Rock' && compuSelect === 'Paper'){
    COMPUTER_SCORE += 1;
    return 'Paper beats Rock.';
  } else if (playerSelect === 'Paper' && compuSelect === 'Scissors'){
    COMPUTER_SCORE += 1;
    return 'Scissors beats Paper.'
  } else if (playerSelect === 'Scissors' && compuSelect === 'Rock'){
    COMPUTER_SCORE += 1;
    return 'Rock beats Scissors.'
  } else {
    PLAYER_SCORE += 1;
    return ` ${playerSelect} beats ${compuSelect}.`
  }

}

function checkWinner(){
  if(COMPUTER_SCORE === 5){
    return "PC WINS!";
  }
  else if(PLAYER_SCORE === 5){
    return "PLAYER WINS!";
  }
}

function resetGame(){
  buttons.forEach( btn => {
    btn.addEventListener('click', displayResult)
  });
  COMPUTER_SCORE = 0;
  PLAYER_SCORE = 0
  pScore.firstChild.textContent = PLAYER_SCORE;
  pcScore.firstChild.textContent = COMPUTER_SCORE;
}

function displayResult(){
  let draw = playRound(this.firstChild.textContent, computerPlay());
  let finalResult = checkWinner();
  pScore.firstChild.textContent = PLAYER_SCORE;
  pcScore.firstChild.textContent = COMPUTER_SCORE;
  para.textContent = finalResult || draw;
  if (finalResult){
    buttons.forEach( btn => btn.removeEventListener('click', displayResult));
    resetGame();
  }
  div.className = 'result-box';
}

resetGame();

