//write a function that returns the object on a given object's prototype chain where a 
//given property is defined. 

function getDefiningObject(object, propKey) {
  let obj = object
  do {
    if (obj.hasOwnProperty(propKey)) {
      return obj
    } else {
      obj = Object.getPrototypeOf(obj)
    }
  } while (obj !== Object.prototype)
  return null
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
let baz = Object.create(bar);
let qux = Object.create(baz);

bar.c = 3;

console.log(getDefiningObject(qux, 'c') === bar);     // => true
console.log(getDefiningObject(qux, 'e'));             // => null