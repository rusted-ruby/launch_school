const promise1 = new Promise((resolve, reject) => {
  console.log("foo"); //2 Nope, first. This code runs immediately
  resolve();
  console.log("bar"); //never? Nope, second
});

promise1.then(() => {
  console.log("baz"); //3 last. This is the async part
});

console.log("qux"); //1 nope, third. runs after promise constructor