/*
  What needs to happen here? 
    listen for a submit event
    on submit, get the two number vals and the operation
      validate the numeric input
      figure the syntax to get the value of the select element
    perform the arithmetic operation via an if statement. 
    Update the message in the dom
*/

$(function() {
  let $left = $('#first-number');
  let $right = $('#second-number');
  let $operator = $('[name = operator]');
  let $result = $('h1#result');
  $('form').submit(function(event) {
    event.preventDefault();
    console.log('submit');
    let left = parseInt($left.val());
    let right = parseInt($right.val());
    let operator = $operator.val();
    console.log(operator)
    let result;
    if (operator === '+') {
      result = left + right;
    } else if (operator === '-') {
      result = left - right;
    } else if (operator === '*') {
      result = left * right;
    } else if (operator === '/') {
      result = left / right;
    }

    $result.text(String(result));

  })
})

/*
  What did LS do that I didn't?
  Well, they didn't use jquery. 
  They did do something cool with the calculation though: instead of 
  a nested if statement, they stored some one-line functions in an
  object as values, and the operator strings as keys. It worked 
  like this

  const Calculate = {
    "+": (firstNumber, secondNumber) => firstNumber + secondNumber,
    "-": (firstNumber, secondNumber) => firstNumber - secondNumber,
    "*": (firstNumber, secondNumber) => firstNumber * secondNumber,
    "/": (firstNumber, secondNumber) => firstNumber / secondNumber,
  };

  let calculate = Calculate[operator];
  let answer = calculate(firstNumber, secondNumber);

  They also use the + sign to coerce a string into a number. I forgot
  that you could do that. 
*/
