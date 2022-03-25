//program uses an add and subtract function to manipulate a total running value
let val = 0;
function add(num) {
  val += num;
  console.log(val)
}

function subtract(num){
  val -= num;
  console.log(val)
}
add(1)
add(42)
subtract(39)
add(6);