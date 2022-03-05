//function should return an array of integers starting at start and ending with end.
//when we have one argument, that should be the ending number and the starting number is 0
//spot the bug.

//wow, this is gross. So many functions called range. 
//ah, the second function we define is what is called. we reassign the 'range' function var
//so the first function var is never being called: we're recursively calling the second range
//function without a quit condition. we never even hit the first one.

//fix this by only using the first range function and setting the defaults appropriatly. 

function range(start, end) {
  if (end === undefined) {
    end = start;
    start = 0;
  }
  const range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// Examples

console.log(range(10, 20));
console.log(range(5));