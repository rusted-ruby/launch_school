//create a function that makes an object with a given object as its prototype without using
//Object.create

//here, we create a constructor function that just returns a new object without any explicitly
//set properties. But since its a constructor function, we can set its prototype to be the 
//given object. Then, any objects we create will have the given object as its prototype

//we could also use setPrototypeOf, but that's a really slow operation.
function createObject(obj) {
  function Creator(){}
  Creator.prototype = obj
  return new Creator()
}

let foo = {
  a: 1
};

let bar = createObject(foo);
console.log(foo.isPrototypeOf(bar));         // true