//function that takes an array, a start index, and the number of values to return
//okay, this one is tough because we need to mutate the original array... I'm not sure
//how to do that without using built in functions

function splice(arr, start, len) {
  let result = [];
  let ix = start
  while (result.length < len) {
    result.push(arr[ix]);
    ix += 1;
  }
  console.log(result)
  arr.length = arr.length - len;
  return result
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
splice(count, 2, 5);                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]

//here's how they did it. used a for loop and modified the array as they went along
function splice2(arr, start, len) {
  let removedVals = [];
  for (let i = start; i < arr.length; i += 1) {
    if (i < start + len) {
      removedVals.push(arr[i])
    }
    arr[i] = arr[i + len]
  }
  console.log(arr);
  arr.length = arr.length - removedVals.length
  console.log(removedVals)
  return removedVals
}

let count2 = [1, 2, 3, 4, 5, 6, 7, 8];
splice2(count2, 2, 5);                   // [ 3, 4, 5, 6, 7 ]
console.log(count2);                                 // [ 1, 2, 8 ]
