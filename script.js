let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function checkGuessRange(userGuess) {
  if (userGuess < 0 || userGuess > 9) {
    alert('Input is out of range.');
    return true;
  }
  return false;
}

function getAbsoluteDistance(player, target) {
  return (player < target) ? target - player : player - target;
}

function compareGuesses(userGuess, comGuess, targetNum) {
  let userGap = getAbsoluteDistance(userGuess, targetNum);
  let comGap = getAbsoluteDistance(comGuess, targetNum);

  if (userGap <= comGap) {
    return true;
  }
  return false;
}

function updateScore(winner) {
  if (winner === 'human') {
    humanScore++;
  }
  else {
    computerScore++;
  }
}

function advanceRound() {
  currentRoundNumber++;
}
/*
updateScore('human');
console.log(humanScore);
updateScore('Computer');
console.log(computerScore);*/
