//this function takes an array and a count. It should return the first count elements
//of the array. Could also have used the arr.slice method for this. 

function firstNOf(arr, count) {
  let newArr = [];
  for (let i = 0; i < count; i += 1) {
    newArr.push(arr[i])
  }
  console.log(newArr)
  return newArr
}

let digits = [4, 8, 15, 16, 23, 42];
firstNOf(digits, 3);    // returns [4, 8, 15]