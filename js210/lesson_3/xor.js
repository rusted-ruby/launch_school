//write a function that returns true if EXACTLY one argument is truthy and false otherwise.

function isXor(cond1, cond2) {
  //if exactly one cond is true, then the and condition will be false and the or will be true.
  //use the double bangs to help with truthyness
  let result = (((!!cond1 && !!cond2) === false) && ((!!cond1 || !!cond2) === true))
  console.log(result);
  return result;
}

isXor(false, true);     // true
isXor(true, false);     // true
isXor(false, false);    // false
isXor(true, true);      // false

console.log("")

isXor(false, 3);        // true
isXor('a', undefined);  // true
isXor(null, '');        // false
isXor('2', 23);         // false