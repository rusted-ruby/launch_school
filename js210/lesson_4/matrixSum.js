//given an array of arrays as an argument, return a new array made up if the sums of each 
//sub array. this sounds like a job for reduce
function matrixSums(arr) {
  let newArr = [];
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  for (i = 0; i < arr.length; i += 1 ) {
    newArr.push(arr[i].reduce(function(previousValue, currentValue) {
      return previousValue + currentValue
    }));
    //alt syntax using the arrow function:
    //newArr.push(arr[i].reduce(reducer));
  }
  console.log(newArr)
  return newArr
}

matrixSums([[2, 8, 5], [12, 48, 0], [12]]);  // returns [15, 60, 12]