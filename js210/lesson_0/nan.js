//NaN is the only value in js that isn't equal to itself. So this should work. 
//if val === val returns false, that means its NaN
function isNotANumber(val) {
  return ((val === val) === false)
}

console.log(isNotANumber(1))
console.log(isNotANumber([1,2,4,5]))
console.log(isNotANumber(NaN))