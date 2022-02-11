//take a sorted array of integers as an argument. return an array that includes all the
//missing integers in order between the first and last elements

//how to do this? the array is sorted, so we know we can rely on the first index being least
//and the last index being largest... how about this: use the first and last element to find
//out how many iterations we need to loop for. Then loop for that many iterations, and add
//any numbers not found in the argument array to the result array.

//would that work for a single element array though? yeah, it would

function missing(arr) {
  let result = [];
  for (let i = arr[0]; i < arr[arr.length - 1]; i += 1) {
    if (!arr.includes(i)) {
      result.push(i);
    }
  }
  console.log(result);
  return result
}

missing([-3, -2, 1, 5]);                  // [-1, 0, 2, 3, 4]
missing([1, 2, 3, 4]);                    // []
missing([1, 5]);                          // [2, 3, 4]
missing([6]);                             // []