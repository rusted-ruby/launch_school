//function takes two args. a string, and times. the function prints the string times number 
//of times. if times isn't a number, or if its a negative number, return undefined. return 
//an empty string if times is 0

//only use string concatenation to do this

//what did LS do? they didn't have a separate if / else branch for the zero case. If you
//start your for loop at zero and times equals zero, then you don't need to. So I took mine out.

function repeat(string, times) {
  //first, validation. first condition handles nulls, false, strings, etc. second handles negatives
  if (isNaN(parseInt(times)) || times < 0 ) {
    console.log(undefined);
    return undefined
  } else {
    //now, we can get to work! iterate times times, incrementing our return str
    result = ''
    for (let i = 0; i < times; i++ ){ 
      result += string
    }
    console.log(result);
    return result
  }

  
}

repeat('abc', 1);       // "abc"
repeat('abc', 2);       // "abcabc"
repeat('abc', -1);      // undefined
repeat('abc', 0);       // ""
repeat('abc', 'a');     // undefined
repeat('abc', false);   // undefined
repeat('abc', null);    // undefined
repeat('abc', '  ');    // undefined