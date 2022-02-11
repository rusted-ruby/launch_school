//write a concat function that takes two arrays and smushes them together

function concat(arr1, arr2) {
  let newLength = arr1.length + arr2.length;
  let newArr = []
  for (let i = 0; i < arr1.length; i += 1) {
    newArr[i] = arr1[i];
  }
  for (let j = 0; j < arr2.length; j += 1) {
    newArr[j + arr1.length] = arr2[j];
  }
  console.log(newArr)
  return newArr
}

concat([1, 2, 3], [4, 5, 6]);       // [ 1, 2, 3, 4, 5, 6 ]