/*
write a function to implement the caesar cipher
each plaintext letter is substituted by the letter located n positions away in the alphabet

Here are some criteria for the cipher
  it only changes alphabetic chars. others are left alone
  the ciper'd chars are of the same case as the normal chars
  if the key exceeds the length of the alphabet, it wraps around itself to the alphabet start.
  
input:
a string and an integer. assume no validation needed on either
first, break the string up into an array of chars. 
  iterate through each char using map to return a new array of ciphere'd chars
  if its an alphabetic char, call a function to decide what its cipher should be.
  if its not an alphabetic char, return it from the map loop it.

join the cipher'd char array into a string and return the string.

two detailed problems:
  how to tell if we have an alphabetic char? should be easy with regex
  How to get the cipher'd value? we'll need a function. Inputs are an alphabetic char and 
  the key.
  We'll need methods to convert a char to its ascii value and back again... that would probably
  be easiest. 
  But then we need to worry about two different numeric ranges to account for upper and lower
  case... 
  Two different sub problems to solve
    tracking case = init a boolean to tell is if its upper case or not, then convert to lowercase
    we do our cipher and if the bool is true, convert the return value to uppercase. 
    doing the actual substitiution = we'll have 

What did LS do?
They have two different alphabetic keys to handle case. They pass the upper or lower one into 
the cipher function so they don't have to keep track of case with a bool.

They also have a different way of ciphering. First, they get the index of their char in letterPos
 They iterate throught the alphabet array. they 
start at 1 and go until they hit the key. if the value of the alphabet array at index letterPos + i
is undefined, they add the alphabet array to itself and keep on looping. that works.

*/
const ALPHABET_ARR ='abcdefghijklmnopqrstuvwxyz'.split('')
function getCipher(char, key) {
  let isUpperCase = false;
  if (char.toUpperCase() === char) {
    isUpperCase = true;
    char = char.toLowerCase();
  }
  let index = ALPHABET_ARR.indexOf(char);
  let cipherIndex = (index + key) % ALPHABET_ARR.length
  let cipherChar = ALPHABET_ARR[cipherIndex]
  if (isUpperCase) {
    cipherChar = cipherChar.toUpperCase()
  }
  return cipherChar
}

function caesarEncrypt(str, key) {
  let charArr = str.split('');
  let regex = /[a-zA-Z]/
  let cipherArr = charArr.map((char) => {
    if (!char.match(regex)) {
      return char
    } else {
      return getCipher(char, key)
    }
  })
  let cipherStr = cipherArr.join('')
  console.log(cipherStr)
  return cipherStr
}

//test cases
// simple shift
caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"

// wrap around
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v"

// all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"