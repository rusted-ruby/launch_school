//write a concat function that takes two arrays and smushes them together
//account for the second arg being an object though. Also make it so that you can concat
//any number of things (splat should be helpful here... ah, in js its called rest params)
//so this means that the second argument will be an array of everything else that's passed in

function concat(arr1, ...arg2) {
  let newArr = arr1.slice();
  for (let i = 0; i < arg2.length; i += 1) {
    let subEntry = arg2[i];
    if (Array.isArray(subEntry)) {
      for (let j = 0; j < subEntry.length; j += 1) {
        newArr.push(subEntry[j]);
      }
    } else {
      newArr.push(subEntry)
    }
  }
  console.log(newArr)
  return newArr
}

concat([1, 2, 3], [4, 5, 6]);          // [1, 2, 3, 4, 5, 6]
concat([1, 2], 3);                     // [1, 2, 3]
concat([2, 3], ['two', 'three']);      // [2, 3, "two", "three"]
concat([2, 3], 'four');                // [2, 3, "four"]


const obj = { a: 2, b: 3 };
const newArray = concat([2, 3], obj);
newArray;                              // [2, 3, { a: 2, b: 3 }]
obj.a = 'two';
console.log(newArray);                              // [2, 3, { a: "two", b: 3 }]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, obj];
const arr3 = concat(arr1, arr2);
arr3;                                  // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
obj.b = 'three';
console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: "three" }]

arr3[5].b = 3;                         // or, `arr3[5]['b'] = 3;`
console.log(obj);                                   // { a: "two", b: 3 }

concat([1, 2, 3], [4, 5, 6] )
concat([1, 2, 3], [4, 5, 6], [7, 8, 9]);    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
concat([1, 2], 'a', ['one', 'two']);        // [1, 2, "a", "one", "two"]
concat([1, 2], ['three'], 4);               // [1, 2, "three", 4]
concat([1,2,3], ['a', 'b'], {c: 'c', d: 'd'}, 4) //[1, 2, 3, 'a', 'b', {c: 'c', d: 'd'}, 4]