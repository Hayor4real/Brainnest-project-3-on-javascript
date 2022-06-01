const computerPlay = () => {
  const options = document.querySelectorAll('.options button');
  const computerOptions = ['rock', 'paper', 'scissors'];

  options.forEach((option) => {
    option.addEventListener('click', function () {
      const computerNumber = Math.floor(Math.random() * 3);
      const computerSelection = computerOptions[computerNumber];
      console.log(computerSelection);
    });
  });
};

computerPlay();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log('it is a tie');
  }
  // check for Rock
  if (playerSelection === 'rock') {
    if (computerSelection === 'scissors') {
      return 'You won! rock beats scissors';
    } else {
      return 'You lose! scissors beats rock';
    }
  }
  // check for paper
  if (playerSelection === 'paper') {
    if (computerSelection === 'scissors') {
      return 'You lose! scissors beat paper';
    } else {
      return 'You won! paper beats scissors';
    }
  }
  // check for Scissors
  if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      return 'You lose! rock beats scissors';
      // return;
    } else {
      return 'You won! scissors beats rock';
      // return;
    }
  }
}

playerChoice = 'Rock';
computerSelection = computerPlay();
const playerSelection = playerChoice.toLowerCase();

console.log(playRound(playerSelection, computerSelection));
