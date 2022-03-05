/*
take a string as an argument and return true if all chars are uppercase
ignore non alphabetic chars.

we could also have done this with regex! see below.
*/
function isUppercase2(str) {
  let arr = str.split('')
  for ( let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== arr[i].toUpperCase()) {
      console.log(false)
      return false
    }
  }
  console.log(true)
  return true
}

function isUppercase(str) {
  console.log(!/[a-z]/.test(str))
  return !/[a-z]/.test(str)
}

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true