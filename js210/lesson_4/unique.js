//function should take an array and return a new array with the duplicate elements removed
//create a new array to store the elements we've seen. if an element from the array argument
//is found in the tracking array, don't add it

function uniqueElements(arr) {
  let trackingArr = [];
  for (let i = 0; i < arr.length; i += 1 ){
    if (!trackingArr.includes(arr[i])) {
      //add the new element to our tracking array
      trackingArr.push(arr[i]);
    }
  }
  console.log(trackingArr);
  return trackingArr
}

uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]);  // returns [1, 2, 4, 3, 5]

//what did LS do? they did more or less the same thing, but they used indexOf in their
//if statement instead of includes.