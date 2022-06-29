let p = new Promise((res, rej) => {
  setTimeout(function() {
    rej("Whoops. Not Launch School")
  }, 2000)
})

p.catch((message) => {
  console.log(message);
});