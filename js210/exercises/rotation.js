//write a function that rotates an array by moving the first element to the end. don't 
//modify the original array. 

//if input isn't an array, return undefined
//return an empty array if the array is empty. 

//first, copy the array and use that as the return value.
//call shift on the copy to pull the first value out. then push it

function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined
  }
  let arrCopy = arr.slice();
  let firstElement = arrCopy.shift();
  if (firstElement === undefined) {
    console.log('[]')
    return []
  }
  arrCopy.push(firstElement);
  console.log(arrCopy);
  return arrCopy
}

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]

//what did LS do? Much more concise. two if statements to return undefiend or an empty array
//then, array.slice(1).concat(array[0]) => that's a good one... creates the new array without
//changing the old one