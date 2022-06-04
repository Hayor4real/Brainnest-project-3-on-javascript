let playerScore = 0;
let computerScore = 0;
const computerOptions = ['rock', 'paper', 'scissors'];
let computerSelection;
let playerSelection;

const computerPlay = () => {
  const randomSelection =
    computerOptions[Math.floor(Math.random() * computerOptions.length)];
  computerSelection = randomSelection;
};

console.log(computerSelection);

const updateScore = () => {
  console.log(playerScore, computerScore);
};

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

playerChoice = 'paper';
computerSelection = computerPlay();
playerSelection = playerChoice.toLowerCase();

console.log(playRound(playerSelection, computerSelection));

const choiceValue = () => {
  console.log(playerSelection);
  computerPlay();
};

function game() {
  for (i = 0; i < 5; i++) {
    if (playerSelection === computerSelection) {
      console.log('it is a tie');
    }
    // check for Rock
    if (playerSelection === 'rock') {
      if (computerSelection === 'scissors') {
        console.log('You won! rock beats scissors');
        playerScore++;
        updateScore();
      } else {
        console.log('You lose! scissors beats rock');
        computerScore--;
        updateScore();
      }
    }
    // check for paper
    if (playerSelection === 'paper') {
      if (computerSelection === 'scissors') {
        console.log('You lose! scissors beat paper');
        computerScore--;
        updateScore();
      } else {
        console.log('You won! paper beats scissors');
        playerScore++;
        updateScore();
      }
    }
    // check for Scissors
    if (playerSelection === 'scissors') {
      if (computerSelection === 'rock') {
        console.log('You lose! rock beats scissors');
        computerScore--;
        updateScore();
        // return;
      } else {
        console.log('You won! scissors beats rock');
        playerScore++;
        updateScore();
        // return;
      }
    }
  }
  playRound(playerSelection, computerSelection);
}
game();

// const computerChoices = ['rock', 'paper', 'scissors'];

// const computerPlay = () => {
//   const randomSelection =
//     computerChoices[Math.floor(Math.random() * computerChoices.length)];
//   computerSelection = randomSelection;
// };

// function playRound(playerSelection, computerSelection) {
//   if (playerSelection === computerSelection) {
//     return 'it is a draw';
//   }
//   if (computerSelection === 'rock' && playerSelection === 'paper') {
//     return 'You won! paper beats rock';
//   }

//   if (computerSelection === 'rock' && playerSelection === 'scissors') {
//     return 'You lost! rock beat scissors';
//   }

//   if (computerSelection === 'paper' && playerSelection === 'scissors') {
//     return 'You Won! scissors beats paper';
//   }
//   if (computerSelection === 'paper' && playerSelection === 'rock') {
//     return 'You lose paper beats rock ';
//   }
//   if (computerSelection === 'scissors' && playerSelection === 'rock') {
//     return 'You won rock beats scissors';
//   }
//   if (computerSelection === 'scissors' && playerSelection === 'paper') {
//     return 'You lose! scissors beat paper';
//   }
// }

// playerChoice = 'scissors';
// computerSelection = computerPlay();
// const playerSelection = playerChoice.toLowerCase();

// console.log(playRound(playerSelection, computerSelection));
