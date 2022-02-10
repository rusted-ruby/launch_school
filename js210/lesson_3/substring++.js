//write a function that returns a substring based on two string indicies. What are the edge cases?
  // negative indicies return nothing
  //nonsense indicies return the whole string
  //no end index returns the whole string starting from the start index. 

//first, do some validation on nonsense values + negative values. 
//then we can have another for loop, start it at start and end it at end.
//have a break condition in the loop if we step out of bounds. 


function substring(string, start, end = (string.length)) {
  //handle the edge cases
  if (isNaN(start) || start < 0) {
    start = 0
  } 
  if (isNaN(end) || end < 0 ){
    end = 0
  }

  //handle the swap
  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }

  //main loop
  newStr = ''
  for (let i = start; i < end; i += 1) {
    if (string[i] === undefined) {
      break
    } else {
      newStr += string[i]
    }
  }
  console.log(newStr)
  return newStr

}

let string = 'hello world';

substring(string, 2, 4);    // "ll"
substring(string, 4, 2);    // "ll"
substring(string, 0, -1);   // ""
substring(string, 2);       // "llo world"
substring(string, 'a');     // "hello world"
substring(string, 1,1)      // ""
substring(string, 8, 20);   // "rld"

//what did LS do?
//they had a long series of if statments sanitizing the inputs. I did that mostly, 
//but I handled the case where a start or end index is too long via the break 
//condition in the for loop. Their loop is much simpler, and all it does is increment.
//they also have a cool way of switching the values of start and end: 
  //[start, end] = [end, start]