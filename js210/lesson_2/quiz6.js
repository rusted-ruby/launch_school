var foo = 1;
function bar() {
  var foo = 2;
  var qux = 5;
  return qux;
}

function foo() {}
console.log(bar());
console.log(foo);