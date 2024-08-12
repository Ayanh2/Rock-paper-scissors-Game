let userScore = 0;
let compScore = 0;

const userScoPera = document.querySelector('#user-score');
const compScopera = document.querySelector('#cmpt-score');

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const genCompChoice = () => {
  const option = ['rock', 'paper', 'scissors'];
  const randIdx = Math.floor(Math.random() * 3);
  return option[randIdx];
};

const drawGame = () => {
  msg.innerText = 'Game is draw play again';
  msg.style.backgroundColor = '#7C98B2';
  msg.style.padding = '10px 20px';
};

const showWinner = (userwin, userChoice, compChoice) => {
  if (userwin) {
    userScore++;
    userScoPera.innerText = userScore;
    msg.innerText = `You Win. your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = '#7FACFF';
    msg.style.padding = '10px 18px';
  } else {
    compScore++;
    compScopera.innerText = compScore;
    msg.innerText = `You Lose. computer ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = '#F082A2';
    msg.style.padding = '10px 20px';
  }
};

const playGame = userChoice => {
  console.log('user choice =', userChoice);
  //Generate computer choice
  const compChoice = genCompChoice();
  console.log('computer choice =', compChoice);

  if (userChoice === compChoice) {
    //Draw game
    drawGame();
  } else {
    let userwin = true;
    if (userChoice === 'rock') {
      //rock, scissors
      userwin = compChoice === 'paper' ? false : true;
    } else if (userChoice === 'paper') {
      //rock, scissors
      userwin = compChoice === 'scissors' ? false : true;
    } else {
      //rock, paper
      userwin = compChoice === 'rock' ? false : true;
    }
    showWinner(userwin, userChoice, compChoice);
  }
};

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    const userChoice = choice.getAttribute('id');
    playGame(userChoice);
  });
});
