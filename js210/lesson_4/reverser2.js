//create a function that reverses an argay, but also works with strings.

function reverser(arg) {
  result = []
  for (i = (arg.length - 1); i >= 0; i -= 1 ) {
    result.push(arg[i]);
  }
  //if its a string, convert from an array to a string
  if (!Array.isArray(arg)) {
    result = result.join('');
  }
  console.log(result)
  return result
}

reverser([1,2,3,4]);
reverser([5,6,7,8]);
reverser('Hello')
reverser([])
reverser('a')