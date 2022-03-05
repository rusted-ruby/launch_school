//what does this code log and why?

// first it logs 5 + (5 * 7) = 40
//next it logs 10 + (5 * 7) = 45
//this happens because the function references the startingBalance variable. it has access
//to this variable from the outer scope due to javascript's lexical scoping rules.
//it also keeps track of changes to the variable, so it knows about the reassignment to 5
//and the reassignment to 10. Note, this isn't because of lexical scope? its because of 
//closures... so which one is it?

let startingBalance = 1;
const chicken = 5;
const chickenQuantity = 7;

function totalPayable(item, quantity) {
  return startingBalance + (item * quantity);
}

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity));

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity));