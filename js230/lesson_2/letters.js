//my answer: f, g, d, z, n, s, q
//actual answer: g, f, d, z, n, s, q
//so everything good except f and g... why? looks like there's still a small delay when using
//setTimeout, even if you don't formally assign it a delay. 
setTimeout(() => {
  setTimeout(() => {
    q(); //7
  }, 15);

  d(); //3

  setTimeout(() => {
    n(); //5
  }, 5);

  z(); //4
}, 10);

setTimeout(() => {
  s(); //6
}, 20);

setTimeout(() => {
  f(); //1
});

g(); //2