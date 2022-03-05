// take a look at what this function does

function doubler(number, caller) {
  console.log(`This function was called by ${caller}.`);
  return number + number;
}

doubler(5, 'Victor');                   // returns 10
// logs:
// This function was called by Victor.

//use partial function application to write a function that has a preset caller
//or maybe its not partial function application, but first class objects?

function makeDoubler(name) {
  return function (number) {
    console.log(`This function was called by ${name}`);
    return number + number
  }
}

let doubler2 = makeDoubler('Victor');
console.log(doubler2(5));                             // returns 10
// logs:
// This function was called by Victor.