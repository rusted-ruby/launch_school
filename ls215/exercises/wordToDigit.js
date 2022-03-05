/*
take a sentence as an argument and replaces the number words with digit chars
only do this for the integers 0 to 9.

so input is a string. output is a string with the number words converted to their corresponding
digits. 

split input string along spaces. call map on it for transformation
  if the word isn't a number word, keep goin
  if the word is a number word, switch it out with its string digit. 

have an object. 
obj = {
  'zero': '0',
  'one': '1', 
}

in our loop, index into our number word object. 

What did LS do?
they created an array of object keys. Then they iterated over each key, created a regex
from that key, and called str.replace on the input using the regex for each key.
*/
const NUMBER_WORDS = {
  'one': '1', 'two': '2', 'three': '3', 'four': '4', 'five': '5', 'six': '6', 'seven': '7',
  'eight': '8', 'nine': '9'
};

function wordToDigit(input) {
  let newStr = input.split(' ').map((ele) => {
    let objVal = NUMBER_WORDS[ele.toLowerCase()];
    if (objVal === undefined) {
      return ele;
    } else {
      return objVal;
    }
  }).join(' ');
  console.log(newStr);
  return newStr
}

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."

wordToDigit('Five five five one two three four. Thanks.');
// "5 5 5 1 2 3 4. Thanks."