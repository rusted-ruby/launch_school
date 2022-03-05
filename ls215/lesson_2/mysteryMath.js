//take the first math operator in a string and replace it with a ?

function mysteryMath(str) {
  //one of the math operators. Escape - and \
  let regex = /[+*\-\/]/
  let result = str.replace(regex, '?'); 
  console.log(result)
  return result
}

mysteryMath('4 + 3 - 5 = 2');
// -> '4 ? 3 - 5 = 2'

mysteryMath('(4 * 3 + 2) / 7 - 1 = 1');
// -> '(4 ? 3 + 2) / 7 - 1 = 1'


//take ALL math chars and replace them with ?
function mysteriousMath(str) {
  //one of the math operators. Escape - and \
  let regex = /[+*\-\/]/g
  let result = str.replace(regex, '?'); 
  console.log(result)
  return result
}

mysteriousMath('4 + 3 - 5 = 2');
// -> '4 ? 3 - 5 = 2'

mysteriousMath('(4 * 3 + 2) / 7 - 1 = 1');
// -> '(4 ? 3 + 2) / 7 - 1 = 1'