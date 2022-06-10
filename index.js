const game = () => {
  const computerOptions = ['rock', 'paper', 'scissors'];
  let pScore = 0;
  let cScore = 0;
  let computerSelection;
  let playerSelection;
  let gameNumbers = 0;

  const playGame = () => {
    let startGame = document.getElementById('btn');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');
    startGame.addEventListener('click', () => {
      introScreen.classList.add('fadeOut');
      match.classList.add('fadeIn');
    });

    // const computerPlay = () => {
    //   return computerOptions[
    //     Math.floor(Math.random() * computerOptions.length)
    //   ];
    // };

    // function playRound(playerSelection, computerSelection) {
    //   if (playerSelection === computerSelection) {
    //     console.log('This is a draw game');
    //   }
    //   // check for Rock
    //   else if (playerSelection === 'rock') {
    //     if (computerSelection === 'scissors') {
    //       return 'You won!';
    //     } else {
    //       return 'You lose!';
    //     }
    //   }
    //   // check for paper
    //   else if (playerSelection === 'paper') {
    //     if (computerSelection === 'scissors') {
    //       return 'You lose!';
    //     } else {
    //       return 'You won!';
    //     }
    //   }
    //   // check for Scissors
    //   if (playerSelection === 'scissors') {
    //     if (computerSelection === 'rock') {
    //       return 'You lose!';
    //       // return;
    //     } else {
    //       return 'You won!';
    //       // return;
    //     }
    //   } else {
    //     return 'Not available';
    //   }
    // }

    // function game() {
    //   for (i = 0; i < gameNumbers; i++) {
    //     let playerSelection = prompt(
    //       'Rock, Paper or Scissors'
    //     ).toLocaleLowerCase();
    //     let computerSelection = computerPlay();
    //     let resultValue = playRound(playerSelection, computerSelection);
    //     if (resultValue === 'You won') {
    //       playerScore++;
    //     } else if (resultValue === 'You lose') {
    //       computerScore++;
    //     } else if (resultValue === 'Not available') {
    //       alert('Not available');
    //       i--;
    //     }
    //     console.log(i);
    //     console.log(
    //       `player: ${playerSelection} and  computer ${computerSelection}`
    //     );
    //     console.log(resultValue);
    //   }
    //   if (playerScore > computerScore) {
    //     console.log(`player won ${playerScore}`);
    //   } else if (playerScore < computerScore) {
    //     console.log(`computer won ${computerScore}`);
    //   } else {
    //     console.log('no winner');
    //   }
    // }

    // function start() {
    //   gameNumbers = prompt('Number of games?');
    //   game();
    // }
    // startGame.addEventListener('click', start);
  };
  const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    const computerOptions = ['rock', 'paper', 'scissors'];
    options.forEach((option) => {
      option.addEventListener('click', function () {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerSelection = computerOptions[computerNumber];
        playRound(this.textContent, computerSelection);
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const playRound = (playerSelection, computerSelection) => {
    const winner = document.querySelector('.winner');
    if (pScore === 5) {
      winner.textContent = 'game over You won';
      return;
    }
    if (pScore === 5) {
      document.getElementById('click').disable = true;
      return;
    }
    if (cScore === 5) {
      winner.textContent = 'game over You Lost';
    }
    if (cScore === 5) {
      document.getElementById('click').disable = true;
      return;
    }
    if (playerSelection === computerSelection) {
      winner.textContent = 'it is a tie';
      return;
    }
    if (playerSelection === 'rock') {
      if (computerSelection === 'scissors') {
        winner.textContent = 'You Won';
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'You Lost';
        cScore++;
        updateScore();
        return;
      }
    }
    if (playerSelection === 'paper') {
      if (computerSelection === 'scissors') {
        winner.textContent = 'You Lost';
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'You Won';
        pScore++;
        updateScore();
        return;
      }
    }
    if (playerSelection === 'scissors') {
      if (computerSelection === 'rock') {
        winner.textContent = 'You Lose';
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'You Won';
        pScore++;
        updateScore();
        return;
      }
    }
  };

  playGame();
  playMatch();
};

game();
