//take a single string as an arg. return an object. Each property is a word from the string.
//each property's value is the number of times that word is in the string. 

function objectHasProperty(object, propertyName) {
  let keys = Object.keys(object);
  return keys.indexOf(propertyName) !== -1;
}

function wordCount(string) {
  let obj = {}
  let arr = string.split(' ');
  for (let i = 0; i < arr.length; i += 1) {
    if (objectHasProperty(obj, arr[i])) {
      obj[arr[i]] += 1
    } else {
      obj[arr[i]] = 1
    }
  }
  console.log(obj);
  return obj
}

wordCount('box car cat bag box');