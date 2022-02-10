let rlSync = require('readline-sync');
let bill = parseInt(rlSync.question("What is the bill?: "),10);
let tipPercentage = parseInt(rlSync.question("What is the tip percentage?: "), 10);
let tip = bill * (tipPercentage / 100)
let total = bill + tip;
console.log(`the tip is $${tip.toFixed(2)}`);
console.log(`the total is $${total.toFixed(2)}`);

//What did LS do? they used parseFloat instead of parseInt. That makes sense becuase you'll
//be able to get the cents of the bill that way.