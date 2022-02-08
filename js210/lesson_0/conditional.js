const myBoolean = true;
const myString = 'hello';
const myArray = [];
const myOtherString = '';

if (myBoolean) {
  console.log('Hello'); //log hello
}

if (!myString) {
  console.log('World'); //does not log
}

if (!!myArray) {
  console.log('World'); //logs World
}

if (myOtherString || myArray) { //logs !
  console.log('!');
}