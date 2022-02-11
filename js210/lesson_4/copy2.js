let myArray = [1, 2, 3, 4];
//const myOtherArray = myArray;
//find two ways to copy myArray without copying the reference. If you're right, line
//6 should log [1, 2, 3, 4]

//first way: using slice
//let myOtherArray = myArray.slice();

//second way: from
let myOtherArray = Array.from(myArray)

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);