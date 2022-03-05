//function takes two arguments: an inventory ID and a list of transactions. it returns
//an array containing only txs for the specified inventory item.
//this is a job for filter.

function transactionsFor(id, txs) {
  return txs.filter((element) => {
    return element.id === id
  })
}

//now, write a function that returns true or false depending on if an item is available.
//available items are ones where the sum of quantity of in txs is greater than the sum
//of the quantities of out txs.

//how to do this? Well, we can use the transactionsFor function to get all transactions for 
//the id we're interested in. Then we iterate over the array and find all quantities for 
//in and out txs. 

//what did LS do for this one? They used reduce on the txArr. So instead of using an if 
//statement, they incremented the final value for in txs and decremented the final value
//for out txs. Then they return quantity > 0;

function isItemAvailable(id, txs) {
  let txArr = transactionsFor(id, txs)
  let inQ = 0;
  let outQ = 0;
  txArr.forEach((element) => {
    if (element.movement === 'in') {
      inQ += element.quantity
    } else if (element.movement === 'out') {
      outQ += element.quantity
    }
  });
  return inQ > outQ
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true