//write a greet function that takes two arguments and logs a greeting.

function greet(a1, a2) {
  console.log(`${a1}, ${a2}!`);
}

function constructor(func, greeting) {
  return function(personName){
    return func(greeting, personName)
  }
}

greet('howdy', 'Joe');
greet("good morning", "Sue")

let sayHello = constructor(greet, "Hello")
sayHello("Brandon");
sayHello("Sarah")
let sayHi = constructor(greet, "Hi");
sayHi("Brandon")
sayHi("Sarah")