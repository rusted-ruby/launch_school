console.log('game')
document.addEventListener('DOMContentLoaded', event => {
  let answer = Math.floor(Math.random() * 100) + 1;
  let form = document.querySelector('form');
  let p = document.querySelector('p');
  form.addEventListener('submit', e => {
    e.preventDefault();
    let textBox = document.querySelector('#guess');
    let guess = Number.parseInt(textBox.value, 10);
    let message;
    if (guess > answer) {
      message = "your guess is higher than the answer"
    } else if (guess < answer) {
      message = "your guess is lower than the answer"
    } else if (guess === answer) {
      message = "you guessed correctly!"
    };
    p.textContent = message;
  })
  let anchor = document.querySelector('a')
  anchor.addEventListener('click', e => {
    e.preventDefault();
    answer = Math.floor(Math.random() * 100) + 1;
    message = 'guess a number from 1 to 100'
    p.textContent = message;
  })
})