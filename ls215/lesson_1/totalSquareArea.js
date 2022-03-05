//rectangles are arrays with two elements: height and width.

//first, write a totalArea function to return the total area of an array of rectangles.
function totalArea(arr) {
  return arr.reduce((accumulator, currentElement) => {
    let area = currentElement[0] * currentElement[1]
    accumulator += area
    return accumulator
  }, 0)
}


let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 141

//now do something similar, but only calculate the values of rectangles that are squares
//let's do a few abstractions here:
  //first, use filter to get an array of square rectangles
  //then call total area to get the area of those squares

function totalSquareArea(arr) {
  let squares = arr.filter((rectangle) => {
    if (rectangle[0] === rectangle[1]) {
      return true
    }
  })
  return totalArea(squares)
}

console.log(totalSquareArea(rectangles)) //121