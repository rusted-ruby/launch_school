//calculate the maximum roatation of a number. The "rotate rightmost digit" function from
//rotate2 will be helpful.

//this looks like we have a loop situation here. we rotate all the rightmost digits, then one
//less, etc. only question is what is the first value we pass into rotateRightMost? looks
//like starting at array length will do the trick

function rotateRightmostDigits(num, n) {
  let numArray = String(num).split('');
  let spliceIndex = numArray.length - n;
  let rotDigit = numArray.splice(spliceIndex, 1)
  numArray.push(rotDigit)
  let finalNum = Number(numArray.join(''));
  //console.log(finalNum);
  return finalNum
}

function maxRotation(num) {
  let len = String(num).length;
  let resultNum = num;
  for (let i = len; i > 0; i -= 1) {
    resultNum = rotateRightmostDigits(resultNum, i);
  }
  resultNum = parseInt(resultNum, 10);
  console.log(resultNum);
  return resultNum
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845