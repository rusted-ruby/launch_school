/*
write a function that computes the difference between the square of the sum of the first n
integers and te sum of the squares of the first n positive integers

assume that the input is always a positive integer.

Two things to do
  create an array of the first n integers
    init a new array and push the values to it
  use reduce to obtain the values we need for subtraction
  make the subtraction

what did LS do?
they didn't even have the array functions. they computed the sum of the squares with the
square of the sums within a for loop, then just returned the result of the subtraction. Many 
ways to skin a cat. 
*/

function sumSquareDifference(n) {
  //first, get an array of the first n integers
  let arr = [];
  for (let i = 1; i <= n; i += 1) {
    arr.push(i);
  }
  //comput square of sum
  let squareOfSum = Math.pow(arr.reduce((prev, curr) => prev + curr), 2);
  //compute sum of sqaures
  let sumOfSquares = arr.reduce((prev, curr) => {
    return prev + Math.pow(curr, 2)
  }, 0)
  let result = squareOfSum - sumOfSquares;
  console.log(result)
  return result
}

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150