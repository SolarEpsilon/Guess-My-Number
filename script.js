'use strict';

// Create secret number between 1 and 20:
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

// Create function to display a given text, then change the text content of our ".message" HTML element to that text:
const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

// Create click listen event for "guess" button:
document.querySelector(`.check`).addEventListener(`click`, function () {
  let guess = Number(document.querySelector(`.guess`).value);

  // If input is not a number:
  if (!guess) {
    displayMessage(`⛔️ No Number!`);
    // If player wins:
  } else if (guess === secretNumber) {
    displayMessage(`🎉 Correct Number!`);
    document.querySelector(`.number`).textContent = secretNumber;

    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;

    // If score is highscore, make score the new highscore:
    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }

    // When guess is wrong:
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `📈 Too high!` : `📉 Too low!`);
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      // If score is below 1, you lose the game:
      displayMessage(`💥 You lost the game!`);
      document.querySelector(`.score`).textContent = 0;
    }
  }

  // Again button that resets everything to initial state without needing to restart page:
  document.querySelector(`.again`).addEventListener(`click`, function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(`.number`).textContent = `?`;
    document.querySelector(`body`).style.backgroundColor = `#222`;
    document.querySelector(`.number`).style.width = `15rem`;
    displayMessage(`Start guessing...`);
    document.querySelector(`.score`).textContent = score;
    document.querySelector(`.guess`).value = ``;
  });
});
