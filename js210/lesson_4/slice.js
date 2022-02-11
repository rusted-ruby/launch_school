function slice(arr, start, end) {
  let result = [];
  for (i = start; i < end; i += 1 ) {
    result.push(arr[i])
  }
  console.log(result)
  return result
}

slice([1, 2, 3, 4, 5], 0, 2);                      // [ 1, 2 ]
slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3);  // [ 'b', 'c' ]