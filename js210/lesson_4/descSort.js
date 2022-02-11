//write a function that uses sort to return an array of numbers sorted in desc order
//do not modify the original array

function descSort(arr) {
  //sort mutates the array its called on, so we'll need a copy
  let newArr = arr.slice();
  newArr = newArr.sort().reverse()
  console.log(newArr);
  return newArr
}

let array = [23, 4, 16, 42, 8, 15];
let result = descSort(array);  // returns [42, 23, 16, 15, 8, 4]
console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]