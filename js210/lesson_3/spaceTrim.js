//write a function that trims any leading or trailing spaces from the input string. 
//only use [] and String.length. do not modify any internal spaces.

//could do this with two for loops. one that starts at the string start and works forwards 
//and one that starts at the string end and works backwards. They could go element by element
//and delete spaces... or wait, that wouldn't work because we can't use  any other string methods

//here's how to do it:   

function trim(str) {
  //loop through string forwards. find the first string that isn't a space and save the index.
  debugger;
  let firstIx = 0;
  for (let i = 0; i < str.length; i++ ) {
    if (str[i] !== ' ') {
      firstIx = i;
      break
    }
  }

  //Then loop through string backwards. find the first string that isn't a space and save that index.
  let secondIx = 0;
  for (let j = (str.length -1); j >= 0; j-- ) {
    if (str[j] !== ' ') {
      secondIx = j
      break
    }
  }

  //Then use a third loop to build a substring based on those indicies
  let trimmedStr = '';
  for (let k = firstIx; k <= secondIx; k++ ){ 
    trimmedStr += str[k];
  }
  
  if (trimmedStr === 'undefined') {
    console.log(str)
    return str
  } else {
    console.log(trimmedStr);
    return trimmedStr
  }
}

trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""