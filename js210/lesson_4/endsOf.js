//function needs to return the first element from the first array and the last element
//from the second array.

function endsOf(arr1, arr2) {
  let newArr = [arr1[0], arr2[arr2.length - 1]];
  console.log(newArr);
  return newArr
}

endsOf([4, 8, 15], [16, 23, 42]);  // returns [4, 42]