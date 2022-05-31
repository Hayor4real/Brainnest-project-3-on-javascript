//  computer random choices

const computerPlay = () => {
  const options = document.querySelectorAll('.options button');

  const computerOptions = ['rock', 'paper', 'scissors'];

  options.forEach((option) => {
    option.addEventListener('click', function () {
      const computerNumber = Math.floor(Math.random() * 3);
      const computerChoiceNumber = computerOptions[computerNumber];
      console.log(computerChoiceNumber);
    });
  });
};
computerPlay();
