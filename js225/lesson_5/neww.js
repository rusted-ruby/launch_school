//createa a neww function that works like the new operator. We can use Object.create here

function neww(constructor, args) {
  //this works, but its too easy: the whole point of the exercise is not to use new
  //return new constructor(...args)

  //this first creates an object with the constructor's prototype as its prototype. then it
  //invokes the constructor function with the new object manually set as its execution 
  //context (so 'this' in Person becomes our new object)
  let obj = Object.create(constructor.prototype);
  let result = constructor.apply(obj,args);
  console.log(obj)
  console.log(result)

  //need this to account for the case the passed in constructor has an explicit return: sometimes
  //they do, sometimes they don't. If they do, then we want that object (result). If they don't,
  //then we want the object that we've configured our constructor function to mutate via the 
  //execution context.
  return typeof result === 'object' ? result : obj;
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

let john = neww(Person, ['John', 'Doe']);
john.greeting();          // => Hello, John Doe
console.log(john.constructor);         // Person(firstName, lastName) {...}