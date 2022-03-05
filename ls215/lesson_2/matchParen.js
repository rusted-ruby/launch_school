//write a function that returns true if we have properly balanced parentheses
//don't assign a value to the parens: only count matching pairs as balanced. ie, don't 
//have ')(' return true. 
//actually, we could still assign a value to each paren... say ( is +1 and ) is -1. We'd
//just need to make sure we quit if we ever go negative on the sum, because that means we
//got a ) before a (, so we can't possibly close that paren.

//so split the string up into an array of chars, iterate through the chars and calculate
//accordingly. use a for loop so we can quit early

function isBalanced(str) {
  let arr = str.split('');
  let count = 0;
  for (let i = 0; i < arr.length; i += 1) {
    char = arr[i]
    if (char === '(' ) {
      count += 1
    } else if (char === ')') {
      count -= 1
    }
    if (count < 0 ) {
      break
    }
  }
  let result = count === 0;
  console.log(result)
  return result
}

isBalanced('What (is) this?');        // true
isBalanced('What is) this?');         // false
isBalanced('What (is this?');         // false
isBalanced('((What) (is this))?');    // true
isBalanced('((What)) (is this))?');   // false
isBalanced('Hey!');                   // true
isBalanced(')Hey!(');                 // false
isBalanced('What ((is))) up(');       // false

/*
what did LS do? Exactly what I did, let's go!
*/