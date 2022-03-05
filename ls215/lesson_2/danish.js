//change the first occurance of apple, blueberry or cherry to danish

function danish(str) {
  //don't forget: need the \b on either side to make sure we only swap it out if its its own
  //word
  let regex = /\b(apple|cherry|blueberry)\b/
  let result = str.replace(regex, 'danish'); 
  console.log(result)
  return result
}

danish('An apple a day keeps the doctor away');
// -> 'An danish a day keeps the doctor away'

danish('My favorite is blueberry pie');
// -> 'My favorite is danish pie'

danish('The cherry of my eye');
// -> 'The danish of my eye'

danish('apple. cherry. blueberry.');
// -> 'danish. cherry. blueberry.'

danish('I love pineapple');
// -> 'I love pineapple'