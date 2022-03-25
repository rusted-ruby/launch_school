//without using Object.create, create a begetObject method that you can call on any object 
//to create an object that inherits from it

//Need to add this method to the Object.prototype so that ANY object that we create will
//have access to it. 
Object.prototype.begetObject = function(){
  function Constructor(){}
  Constructor.prototype = this;
  return new Constructor
}

//console.log(this)

let foo = {
  a: 1,
};

let bar = foo.begetObject();
console.log(foo.isPrototypeOf(bar));         // true