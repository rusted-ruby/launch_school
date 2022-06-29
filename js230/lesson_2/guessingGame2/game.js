console.log('in the script');
document.addEventListener("DOMContentLoaded", event => {
  let answer = getNewAnswer();
  let messageEle = document.querySelector('p');
  let newGameLink = document.querySelector('a');
  let textBox = document.getElementById('guess');

  document.addEventListener('submit', subEvent => {
    subEvent.preventDefault();
    let guess = parseInt(textBox.value, 10);
    let message = '';
    if (guess < answer) {
      message = "Your guess is less than the answer"
    } else if (guess > answer) {
      message = "Your guess is higher than the answer"
    } else if (guess === answer) {
      message = "You guessed correctly!"
    } else {
      message = "Invalid guess"
    }
    messageEle.textContent = message;
  })

  newGameLink.addEventListener('click', newGameEvent => {
    answer = getNewAnswer();
    message = 'Guess a number';
    messageEle.textContent = message;
    textBox.value = '';
  })
})

const MAX_INT = 100;
const MIN_INT = 1;

function getNewAnswer() {
  return Math.floor(Math.random() * MAX_INT) + MIN_INT
}