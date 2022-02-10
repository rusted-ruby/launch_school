//write a function that returns strings converted to lowercase.
//we can do this by getting a char's ascii value and adding 32 to it.
//string.fromCharCode and String.charCodeAt can help with this. Only use these methods,
//string bracket indexing and the length property.

//just make a loop and use the ascii operations to change each char. We'll also need to see
//if the char we're looking at is a number or not... we can do that with parseInt

function toLowerCase(string) {
  let newStr = '';
  for (let i = 0; i < string.length; i++){
    let char = string[i];
    if (isNaN(parseInt(char))) {
      //if its not a number, do number conversion things
      let asciiNumber = char.charCodeAt();
      //don't want to convert numbres that are already lowercase
      if (65 <= asciiNumber && asciiNumber <= 90) {
        char = String.fromCharCode(asciiNumber + 32);
      }
    } 
    newStr += char;
  }
  console.log(newStr)
  return newStr
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"

//what did LS do?
//they had a constant for conversion offset instead of a magic number
//they also didn't handle the numeric case; they didn't need to! They just convert everything
//to an ascii, but they only apply the offset if the ascii they're looking at is for an uppercase letter

function toLowerCaseAlt(string) {
  let OFFSET = 32;
  let newStr = ''
  for(let i = 0; i < string.length; i++ ) {
    char = string[i].charCodeAt();
    if ('A' <= string[i] && string[i] <= 'Z') {
      char += OFFSET
    }
    newStr += String.fromCharCode(char)
  }
  console.log(newStr)
  return newStr
}

toLowerCaseAlt('ALPHABET');    // "alphabet"
toLowerCaseAlt('123');         // "123"
toLowerCaseAlt('abcDEF');      // "abcdef"

//note that js has a built in method called toLowerCase