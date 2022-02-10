//write a function that removes non-alphabetic characters from strings. If there are multiple
//non-alphabet chars in a row, only return one space.

//two problems here
  //how to tell if a char is alphabetic => could have a function that uses if / elses to do
  //this piece
  //how to prevent consecutive spaces. => this won't be that bad. have a placeholder var
  //for the previous character. If the placeholder is a space and the current char is a space,
  //don't add the current char to the resultant string.

function isNotAlphabetic(char) {
  return !(('a' <= char && char <= 'z') || ('A' <= char && char <= 'Z'))
}

function noConsecutiveSpaces(char,placeholder) {
  return !(placeholder === ' ' && char === placeholder)
}

function cleanUp(str) {
  let newStr = '';
  let placeholder = '';
  for (let i = 0; i < str.length; i += 1 ) {
    let char = str[i]
    if (isNotAlphabetic(char)) {
      char = ' '
    }
    if (noConsecutiveSpaces(char, placeholder)) {
      newStr += char;
      placeholder = char;
    }
  }
  console.log(newStr);
  return newStr
}

cleanUp("---what's my +*& line?");    // " what s my line "