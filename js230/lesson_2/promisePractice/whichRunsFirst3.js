const promise = new Promise((resolve, reject) => {
  console.log("foo"); //1
  reject();
  console.log("bar"); //2
});

promise
  .then(() => {
    console.log("baz"); //never
  })
  .catch(() => {
    console.log("qux"); //4
  });

console.log("abc"); //3