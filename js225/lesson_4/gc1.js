/*
when can we GC the following arrays?
[1] => line 17. Nope, line 11
[2] => 17
[1,2] => 17. Nope, line 20 (program end) b/c the a on line 11 is a global var.
*/

let a = [1];

function add(b) {
  a = a.concat(b);
}

function run() {
  let c = [2];
  let d = add(c);
}

run();