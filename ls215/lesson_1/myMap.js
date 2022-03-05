function myMap(array, func) {
  result = []
  array.forEach((element, index, arr) => {
    result.push(func(element, index, arr))
  }) 
  return result
}

let plusOne = n => n + 1;
console.log(myMap([1, 2, 3, 4], plusOne));       // [ 2, 3, 4, 5 ]