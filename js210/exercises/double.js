//take a string argument and return a new string that removes consecutive duplicate chars

//have a loop that iterates over a string. have a placeholder var for the current char. if the 
//placeholder equals the current char, then don't add it. if it doesn't, then add it and keep 
//going

function crunch(str) {
  let result = '';
  let placeholder = '';
  for (let i = 0; i < str.length; i += 1 ) {
    let char = str[i]
    if (char !== placeholder) {
      placeholder = char;
      result += char;
    }
  }
  console.log(result);
  return result
}


crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""