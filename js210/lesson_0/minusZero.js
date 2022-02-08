function isMinusZero(val) {
  return 1 / val === -Infinity
}

console.log(isMinusZero(1))
console.log(isMinusZero(-1))
console.log(isMinusZero(0))
console.log(isMinusZero(-0))