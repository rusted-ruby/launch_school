//create an object that returns bool true if the two objects passed in as arguments have the 
//same key value pairs

/*
How did LS do this?
Same basic concept. Only difference is that they use sort their arrars, then use Array.every 
on arr1 and check that each element is the same in arr2
*/

function elementsArentUnique(arr1, arr2){
  for (let i = 0; i < arr1.length; i += 1 ) {
    let ele1 = arr1[i]
    let ele2 = arr2[i]
    if (ele1 !== ele2) {
      return true
    }
  }
  return false
}

function objectsEqual(obj1, obj2){
  let key1 = Object.keys(obj1);
  let key2 = Object.keys(obj2);
  let val1 = Object.values(obj1);
  let val2 = Object.values(obj2);

  //quick simple check before we loop through all the things
  if (key1.length !== key2.length || val1.length !== val2.length) {
    return false
  }
 
  if (elementsArentUnique(key1, key2) || elementsArentUnique(val1, val2)) {
    return false
  }
  return true
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false