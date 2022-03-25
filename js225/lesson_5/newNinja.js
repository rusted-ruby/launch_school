let ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

// create a ninjaB object. use ninjaA as the prototype so that the last line logs true.
let ninjaB = Object.create(ninjaA);

console.log(ninjaB.constructor === ninjaA.constructor);    // should log true