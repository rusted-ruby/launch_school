//what will each of these snippets log?
/*
var counter = 5;
var rate = 3;
console.log('The total value is ' + String(counter * rate));

function counter(count) {
  // ...
}


this one is hoisted into
function counter(count) {

}
var rate = 3
counter = 5
log

so it'll log total value is 15
*/

/*
function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

var counter = 5;
var rate = 3;

/*
this one is hoisted into
function counter(){}
var rate = 3
log
counter = 5
this one will raise an error because we're trying to multiply a function by a number.
or, not an error. It looks like we get NaN out of that situation
*/

/*
var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

/*
this one is hoisted into
function counter(){}
var rate = 3
counter = 5
log
so this logs the total value is 15
*/

let counter = 5;
let rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

/*
this one is hoisted into
function counter() {}
let rate = 3
counter = 5
log
so this one logs 15 too.
No, its an error... I have no idea why. 
its because we declare counter with let. If we do that, we can't declare a variable with the
same name in the same scope. 
*/