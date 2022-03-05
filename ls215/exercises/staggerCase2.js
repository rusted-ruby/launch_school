/*
now do staggered case, except ignore the non-alphabetic letters when iterating.
so same as last time, except have a case iterator take the place of the actual array index
only incrememnt the case iterator if we're looking at an alphabetic char

*/
"use strict"
function staggeredCase(str) {
  let charIndex = 0
  let newStr = str.split('').map((char) => {
    if (/[a-zA-Z]/.test(char)) {
      if (charIndex % 2 === 0 ) {
        charIndex += 1
        return char.toUpperCase()
      } else {
        charIndex += 1
        return char.toLowerCase()
      }
    } else {
      return char
    }
  }).join('');
  console.log(newStr)
  return newStr
}

staggeredCase('I Love Launch School!');        // "I lOvE lAuNcH sChOoL!"
staggeredCase('ALL CAPS');                     // "AlL cApS"
staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 nUmBeRs"