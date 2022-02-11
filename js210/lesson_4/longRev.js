//given an array, return a new array made up of the elements of the argument followed by
//the elements of the argument in reverse order

function longRev(arr) {
  //this returns a copy of arr: we can now modify newArr without mutating arr.
  let newArr = arr.slice();
  for (let i = arr.length - 1; i >= 0; i -= 1 ) {
    newArr.push(arr[i]);
  }
  console.log(newArr);
  return newArr
}

let digits = [4, 8, 15, 16, 23, 42];
let arr = [1,2,3,4]

longRev(digits);
longRev(arr);

//how did LS do this? pretty slick method

function mirror(arr) {
  console.log(arr.concat(arr.slice().reverse()));
  return arr.concat(arr.slice().reverse())
}

mirror(arr)
console.log(arr);