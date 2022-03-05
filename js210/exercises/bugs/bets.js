//guess a number between 1 and 25. the program picks a random one and tells you if you've 
//guessed it right. But it raises an error. What is it and how should you fix it?

//this has to be something with hoisting and the nested function. 
/*
so what does this function get hoisted into. its not a declaration so it must go something 
like this
let generateRandomInt
const = winningNumber = generateRanomInt()
***function definition***

No, that's not it. The problem is that with function expressions, you can't access the name
of the function from outside it. You need to pair a function expression with a variable 
assignement, and then invoke the function via the variable. 
*/

let rlSync = require('readline-sync');
function placeABet(guess) {
  function generateRandomInt() {
    return Math.floor(Math.random() * 25) + 1;
  };

  const winningNumber = generateRandomInt();

  if (guess < 1 || guess > 25) {
    return 'Invalid guess. Valid guesses are between 1 and 25.';
  }

  if (guess === winningNumber) {
    return "Congratulations, you win!";
  } else {
    return "Wrong-o! You lose.";
  }
}

const userGuess = parseInt(rlSync.question('Pick a number between 1 and 25: '), 10);
console.log(placeABet(userGuess));