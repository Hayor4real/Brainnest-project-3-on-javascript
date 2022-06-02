let playerScore = 0;
let computerScore = 0;

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

const updateScore = () => {
  console.log(playerScore);
  console.log(computerScore);
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
const playerSelection = playerChoice.toLowerCase();

console.log(playRound(playerSelection, computerSelection));

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
        computerScore++;
        updateScore();
      }
    }
    // check for paper
    if (playerSelection === 'paper') {
      if (computerSelection === 'scissors') {
        console.log('You lose! scissors beat paper');
        computerScore++;
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
        computerScore++;
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
}

game();

// function ayo() {
//   if (playerSelection === computerSelection) {
//     console.log('it is a tie');
//   }
//   if (playerSelection === 'rock') {
//     if (computerSelection === 'scissors') {
//       console.log('You won! rock beats scissors');

//       playerScore++;
//     } else {
//       console.log('You loss! scissors beats rock');

//       computerScore++;
//     }
//   }
//   if (playerSelection === 'paper') {
//     if (computerSelection === 'scissors') {
//       console.log('You loss! scissors beats paper');

//       computerScore++;
//     } else {
//       console.log('You won! paper beats scissors');

//       playerScore++;
//     }
//   }
//   if (playerSelection === 'scissors') {
//     if (computerSelection === 'rock') {
//       console.log('You loss! rock beats scissors');

//       computerScore++;

//       // return;
//     } else {
//       console.log('You won! scissors beats rock');

//       playerScore++;
//     }
//   }
// }
