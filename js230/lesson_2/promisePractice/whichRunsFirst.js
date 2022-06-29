const p = new Promise(function(resolve, reject) {
  resolve('This is a promise');
})

//promises are async code, so they run after all sync code.
p.then((message) => console.log(message));
console.log("This is not a promise");