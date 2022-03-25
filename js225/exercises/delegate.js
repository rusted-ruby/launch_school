/*
write a delegate function. It should delegate the behavior of a method or function to another
object's method. args should be an object, and the name of the method on the object. 
*/

function delegate(obj, methodName, ...args){
  return function(){
    return obj[methodName](args)
  }
}

const foo = {
  name: 'test',
  bar(greeting) {
    console.log(`${greeting} ${this.name}`);
  },
};

const baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

baz.qux();   // logs 'hello test';

foo.bar = () => { console.log('changed'); };

baz.qux();          // logs 'changed'