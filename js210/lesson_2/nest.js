var a = 'global';
function checkScope() {
  var a = 'local';
  const nested = function() {
    var a = 'nested';
    let superNested = () => {
      a = 'superNested';
      return a;
    };
    return superNested();
  };
  return nested();
}

console.log(checkScope());
console.log(a);