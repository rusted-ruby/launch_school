/*
function should take a string as an argument and return the string with the first letter
of every word capped and all other letters lowered.

easy. split the string along spaces. iterate through the array. lowercase each word, then
capitalize the first char in each word
*/

function wordCap(str) {
  let arr = str.split(' ');
  let newArr = arr.map((word) => {
    word = word.toLowerCase();
    return word[0].toUpperCase() + word.slice(1)
  })
  let newStr = newArr.join(' ');
  console.log(newStr)
  return newStr
}

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'

