//write a function that rotates the last n digits of a number. last N digits of the number
//take the first one of the last n and send it to the end. 

/*
how to do this? could convert the number into a string, then split it into an array. then
use splice to remove the digit in question, pop it in the end, then recombine everything.
just need to get the index we want to take out
looks like it'll be array length - n + 1
*/

function rotateRightmostDigits(num, n) {
  let numArray = String(num).split('');
  let spliceIndex = numArray.length - n;
  let rotDigit = numArray.splice(spliceIndex, 1)
  numArray.push(rotDigit)
  let finalNum = Number(numArray.join(''));
  console.log(finalNum);
  return finalNum
}

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917