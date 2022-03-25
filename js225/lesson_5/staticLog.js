//use Object.defineProperties to create a function that makes an object with a read only
//log method.

function newPerson(name) {
  let obj = {
    name
  };
  Object.defineProperties(obj, {
    log: {
      writable: false,
      value: function(){console.log(this.name)}
    },
  });
  return obj
}

let me = newPerson('Shane Riley');
console.log(me)
me.log();     // => Shane Riley
me.log = function() { console.log('Amanda Rose'); };
me.log();     // => Shane Riley