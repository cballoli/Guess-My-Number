'use strict';
// DOM Manipulation...

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
/*
if (!guess) {
  document.querySelector('.message').textContent = 'no Number!';
} else if (guess === secretNumber) {
  document.querySelector('.message').textContent = 'Correct Number :D';
} else if (guess < secretNumber - 4,3,2,1) {
  document.querySelector('.message').textContent = 'LOW!!!';
} else if (guess < secretNumber - 8) {
  document.querySelector('.message').textContent = 'TOO LOW!!!';
} else if (guess >= secretNumber + 4) {
  document.querySelector('.message').textContent = 'HIGH!!!';
} else if (guess >= secretNumber + 8) {
  document.querySelector('.message').textContent = 'TOO HIGH!!!';
}
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const dispMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// console.log(secretNumber);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  // WHEN there is no Input..
  if (!guess) {
    // document.querySelector('.message').textContent = 'no Number!';
    dispMessage('No Number!');

    // when Player Wins...
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number :D';

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when guess is Wrong...
  } else if (guess !== secretNumber) {
    if (score > 1) {
      dispMessage(guess < secretNumber ? 'Too LOW!!!' : 'Too High!!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      dispMessage('YOU LOST THE GAME!!!');
      document.querySelector('.score').textContent = 0;
    }
  }
  // when guess is Too low...
  /*
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'TOO LOW!!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'YOU LOST THE GAME!!!';
      document.querySelector('.score').textContent = 0;
    }

    // when guess is Too high...
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'TOO HIGH!!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'YOU LOST THE GAME!!!';
      document.querySelector('.score').textContent = 0;
    }
  }
  */

  // Restoring Again & Again...
  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.guess').value = null;
    document.querySelector('.score').textContent = score;

    dispMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
});
