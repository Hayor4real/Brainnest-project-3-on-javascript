const computerOptions = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let computerSelection;
let playerSelection;
let startGame = document.getElementById('btn');

const computerPlay = () => {
  return computerOptions[Math.floor(Math.random() * computerOptions.length)];
};

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log('This is a draw game');
  }
  // check for Rock
  else if (playerSelection === 'rock') {
    if (computerSelection === 'scissors') {
      return 'You won!';
    } else {
      return 'You lose!';
    }
  }
  // check for paper
  else if (playerSelection === 'paper') {
    if (computerSelection === 'scissors') {
      return 'You lose!';
    } else {
      return 'You won!';
    }
  }
  // check for Scissors
  if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      return 'You lose!';
      // return;
    } else {
      return 'You won!';
      // return;
    }
  } else {
    return 'Not available';
  }
}

function game() {
  for (i = 0; i < 5; i++) {
    let playerSelection = prompt('Rock, Paper or Scissors').toLocaleLowerCase();
    let computerSelection = computerPlay();
    let resultValue = playRound(playerSelection, computerSelection);
    if (resultValue === 'You won') {
      playerScore++;
    } else if (resultValue === 'You lose') {
      computerScore++;
    } else if (resultValue === 'Not available') {
      alert('Not available');
      i--;
    }
    console.log(i);
    console.log(
      `player: ${playerSelection} and  computer ${computerSelection}`
    );
    console.log(result);
  }
  if (playerScore > computerScore) {
    console.log(`player won ${playerScore}`);
  } else if (playerScore < computerScore) {
    console.log(`computer won ${computerScore}`);
  } else {
    console.log('no winner');
  }
}
