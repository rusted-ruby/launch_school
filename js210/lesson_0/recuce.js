function sumOfSquares(arr) {
  return arr.reduce(function(accumulator, element) {
    console.log("acc",accumulator);
    console.log("ele_", element);
    return (element * element) + accumulator
  })
}

let array = [3,5,7]
console.log(sumOfSquares(array));