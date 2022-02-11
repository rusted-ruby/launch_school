//this function should accept two args: an array and a val t osearch for. if it finds the val
//then return the first index where that val lives. 

function indexOf(arr, val) {
  let ix = -1
  for (let i = 0; i < arr.length; i += 1) {
    if (val === arr[i]) {
      ix = i
      break
    }
  }
  console.log(ix)
  return ix
}

indexOf([1, 2, 3, 3], 3);         // 2
indexOf([1, 2, 3], 4);            // -1