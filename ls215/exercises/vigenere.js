/*
vigenere cipher is a more complex encoder. use a SERIES of caesar ciphers based on letters of a 
key word. each letter in the key word is used as the key to a caesar cipher. so 'a' in the keyword
is a key of 0, 'b' in the keyword is a key of 1, and so on all the way to 'z' having a key of 25
The keys from the keyword are applied sequentially to each ALPHABETIC char in the input string

plaintext: Pineapples don't go on pizzas!
keyword: meat

Applying the Vigenere Cipher for each alphabetic character:
plaintext : Pine appl esdo ntgo onpi zzas
shift     : meat meat meat meat meat meat
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

result: Bmnxmtpeqw dhz'x gh ar pbldal!

write a function that applies the vigenere cipher to an input text.

inputs are a string to encode and a keyword. 
output is an encoded string. 

split input array into an array of chars. use map to iterate through chars to return a 
cipher array, then join that.

split the concept of keys into two: the key char index and the current key. 
init the key char index to 0

within the loop, if we're dealoing with an alphabetic char, do the following
  pass the current key char index and the keyword to a function to get the next key
  pass the char and the current key to the cipher function we wrote last time
  increment the current key char to get its next value. it'll be 
  currentVal = (currentVal + 1) % keyWord.length - 1
if we're not dealing with an alphabetic char, just return the char.

Nice! What did LS do?
pretty much the same thing as me: take the structure from the last problem, use the keyword 
ichar index to get the current key and incrememnt the keyword char index using modulo and length
of the keyword. 
*/

const ALPHABET_ARR ='abcdefghijklmnopqrstuvwxyz'.split('');
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

//input is the lowercase keyword and the current key char index
//output is the numeric key used for the cipher
function getKey(keyCharIndex, keyWord) {
  let keyChar = keyWord[keyCharIndex]
  return ALPHABET_ARR.indexOf(keyChar)
}

function vigenere(str, keyWord) {
  keyWord = keyWord.toLowerCase()
  let strArr = str.split('');
  let regex = /[a-zA-Z]/
  let keyCharIndex = 0;
  let cipherArr = strArr.map((char) => {
    if (!!char.match(regex)) {
      //do cipher things
      debugger;
      let key = getKey(keyCharIndex, keyWord);
      let cipherChar = getCipher(char,key);
      keyCharIndex = (keyCharIndex + 1) % (keyWord.length)
      return cipherChar
    } else {
      return char
    }
  })
  let cipherStr = cipherArr.join('');
  console.log(cipherStr)
  return cipherStr
}

//test cases
vigenere("Pineapples don't go on pizzas!", "meat"); //Bmnxmtpeqw dhz'x gh ar pbldal!
vigenere("striaght up!", "leen") // dxvvlklg ft!
vigenere("Pineapples don't go on pizzas!", "a"); //Pineapples don't go on pizzas!
vigenere("Pineapples don't go on pizzas!", "aa"); //Pineapples don't go on pizzas!
vigenere("Pineapples don't go on pizzas!", "cab"); //Riogaqrlfu dpp't hq oo riabat!
vigenere("Dog", "Rabbit") // Uoh