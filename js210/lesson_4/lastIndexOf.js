//same as index of, except it returns the last index instead of the first one. 
function lastIndexOf(arr, val) {
  let ix = -1;
  for (let i = 0; i < arr.length; i += 1) {
    if (val === arr[i]) {
      ix = i;
    }
  }
  console.log(ix)
  return ix
}

lastIndexOf([1, 2, 3, 3], 3);     // 3
lastIndexOf([1, 2, 3], 4);        // -1

//LS had a better way of doing it: they had the same setup as indexOf where the loop breaks,
//they just start at the end of the array instead of starting at the beginning. that's better
//than mine since mine will need to look through an entire array. 