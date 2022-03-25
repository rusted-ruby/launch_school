var sum = 0;
var numbers;

sum += 10;
sum += 31;

numbers = [1, 7, -3, 3];

let arrSum = (function sum(arr) {
  return arr.reduce(function(sum, number) {
    sum += number;
    return sum;
  }, 0);
})(numbers)

sum += arrSum;  // ?
console.log(sum) //49

/*
so what happened here? Problem was that the sum function is hoisted above the definition of the 
sum variable. This meant that we couldn't invoke the sum function because its name conflicted
with an already existing var. So we just used an IIFE to invoke the function immediately
in its own private scope to get the value we needed and that was that. 
*/