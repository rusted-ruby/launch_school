//here's some code 
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

//let's hoist it

var a;
a = 'global'
function checkScope() {
  a = 'local'
  const nested = function() {
    a = 'nested';
    let superNested = () => {
      a = 'supernested';
      return a;
    };
    return superNested();
  };
  return nested();
}

console.log(checkScope());
console.log(a);