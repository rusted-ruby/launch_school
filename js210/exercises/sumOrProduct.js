//enter an integer greater than 0 and ask if you want the sum or product.

let rlSync = require('readline-sync');
let int = parseInt(rlSync.question("please enter an integer greater than 0: "), 10);
let method = rlSync.question('Enter "s" to compute sum, or "p" to compute product. ');
let finalResult;
let operator;
if (method === 'p' ){
  operator = 'product'
  let result = 1;
  for (let i = 1; i <= int; i += 1) {
    result *= i;
  }
  finalResult = result
} else if(method === 's') {
  operator = 'sum'
  let result = 0;
  for (let i = 0; i <= int; i += 1) {
    result += i;
  }
  finalResult = result
}
console.log(`the ${operator} of the integers between 1 and ${int} is ${finalResult}`)

//what did ls do? there has to be some method that makes this easier...
//well, if we had the integers in an array, we could use the reduce method.