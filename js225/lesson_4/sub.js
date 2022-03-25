function subtract(a, b){
  console.log(a - b)
  return a-b
}

function multiply(a, b){
  console.log(a * b)
  return a * b
}


function makePartialFunc(inner, n){
  return function(a){
    return inner(a, n)
  }
}

let sub5 = makePartialFunc(subtract, 5);
let sub10 = makePartialFunc(subtract, 10)
let mult10 = makePartialFunc(multiply, 10)

sub5(10) //5
sub5(20) //15

sub10(100)
sub10(4)

mult10(-4)