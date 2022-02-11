//make a new array given one, but the new array only has elements of the old one that have
//an odd index

function oddElementsOf(arr) {
  let newArr = [];
  for (let i = 1; i < arr.length; i += 2) {
    newArr.push(arr[i]);
  }
  console.log(newArr);
  return newArr
}

let digits = [4, 8, 15, 16, 23, 42];

oddElementsOf(digits);    // returns [8, 16, 42]