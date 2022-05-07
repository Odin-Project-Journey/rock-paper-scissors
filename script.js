let PLAYS = ['Rock', 'Paper', 'Scissors'];

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
    return 'You lose! paper beats rock.';
  } else if (playerSelect === 'Paper' && compuSelect === 'Scissors'){
    return 'You lose! scissors beats paper.'
  } else if (playerSelect === 'Scissors' && compuSelect === 'Rock'){
    return 'You lose! rock beats scissors.'
  } else {
    return `You win! ${playerSelect.toLowerCase()} beats ${compuSelect.toLowerCase()}.`
  }

}

// Write a func called game, that calls the the playRound function 5 times

// let playerHand;
// let computerHand;

for(let i = 0; i < 5; i++){
  let playerHand = playerPrompt();
  let computerHand = computerPlay();
  console.log(playRound(playerHand, computerHand));
}
