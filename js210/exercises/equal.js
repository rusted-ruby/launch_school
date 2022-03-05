// expect this to log true, but it logs false instead. What happens?
//we use strict equality here. So person and otherPerson are two objects that have the
//same values, but they're not the same object. 

const person = { name: 'Victor' };
let otherPerson = { name: 'Victor' };

console.log(person === otherPerson);    // false -- expected: true

//refactoring it like this gives us what we want. 

otherPerson = person
console.log(person === otherPerson);
