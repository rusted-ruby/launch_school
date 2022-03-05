/*
a featured number is an odd multiple of 7 where all digits ocurr exacly once.

write a function that accepts an integer. It should return the next featured number that's 
greater than the given integer

if we pass in the largest featured number (9876543201), return a message

two small problems to solve here
  how to get the next multiple of 7 given an input number
    have a while loop. break when the number is divisible by 7. make sure we increment the 
    number first, because we don't want to return the input if its divisible by 7.
  given a number that's a multiple of 7, how do we check if its a featured num?
    first, that its odd. num % 2 === 1
    second, that all digits are unique. 
      turn the number into a string and split it
      init an array to hold unique values
      iterate over the array. if the element doesn't live in the unique array, add it
      if the element does live in the unique array, quit

first, check to see if the number is greater than or equal to maxnum. if it is, return a message
  if it isn't, get the next multiple of 7 that's greater than the input
  start a loop. check to see if the multiple of 7 is featured. if it is, return it. if it isnt,
  increment by 7 and try again. 

Okay, this works! What did LS do?
  pretty much the same thing as me. the one enhancement they made was that they turned
  the input to an ODD multiple of 7, then incremeneted by 14 instead of 7 in the final while
  loop. That way, the only thing they needed to check was the uniqueness of the digits. 
*/
const MAX_FEATURED = 9876543201

function isFeaturedNum(num) {
  if (num % 2 === 0) {
    return false
  }
  let arr = String(num).split('');
  let unique = []
  for (let i = 0; i < arr.length; i += 1) {
    if (unique.includes(arr[i])) {
      return false
    } else {
      unique.push(arr[i])
    }
  }
  return true
}
function featured(num) {
 if (num >= MAX_FEATURED) {
   console.log("there is no possible number that fulfills the requirements");
   return "there is no possible number that fulfills the requirements"
 }
 
 //turn the num to the next multiple of 7
 while (true) {
   num += 1
   if (num % 7 === 0) {
     break
   }
 }

 //get the next featured num
 while (true) {
   if (isFeaturedNum(num)) {
     console.log(num)
     return num
   }
   num += 7
 }
}

//test cases
featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."