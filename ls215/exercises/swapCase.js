/*
write a function that takes a string as an argument and swaps the case of each char
this would be easy to brute force code... but what if there's an easier way to do it?
*/

function getCasedChar(char) {
  if (/[a-z]/.test(char)) {
    return char.toUpperCase()
  } else if (/[A-Z]/.test(char)) {
    return char.toLowerCase()
  } else {
    return char
  }
}

function swapCase(str) {
  let newStr = str.split('').map((char) => {
    return getCasedChar(char)
  }).join('');
  console.log(newStr)
  return newStr
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"