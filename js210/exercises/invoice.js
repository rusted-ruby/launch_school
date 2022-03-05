// how can I refactor this so that it will work with any number of arguments?
//you could use the arguments object and iterate through that. Or you could use the 
//... thingy (the rest operator) to collect the params into an array, then iterate through 
//that. You could even use reduce!!!

function invoiceTotal(amount1, amount2, amount3, amount4) {
  return amount1 + amount2 + amount3 + amount4;
}

console.log(invoiceTotal(20, 30, 40, 50));          // works as expected

function invoiceTotal2(...amounts) {
  let total = amounts.reduce(function(previousVal, currentVal) {
    return previousVal + currentVal
  })
  return total
}
console.log(invoiceTotal2(20, 30, 40, 50));          // works as expected
console.log(invoiceTotal2(20, 30, 40, 50, 40, 40));  // does not work; how can you make it work?