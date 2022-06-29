setTimeout(() => { //1
  setTimeout(() => {
    q();
  }, 15);

  d();

  setTimeout(() => {
    n();
  }, 5);

  z();
}, 10);

setTimeout(() => { //2
  s();
}, 20);

setTimeout(() => { //3
  f();
});

g(); //4

//g, f, d, z, n, s, q