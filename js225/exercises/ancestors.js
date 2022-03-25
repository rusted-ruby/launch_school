//implement an ancestors method that returns an array of the names of the objects in the 
//given object's prototype chain. 

//could also solve this via recursion. 

Object.prototype.ancestors = function(){
  let proto = Object.getPrototypeOf(this);
  let result = [];
  //proto is null when we try to get the prototype of the object prorotype
  while (proto !== null) {
    if (proto === Object.prototype){
      result.push('Object.prototype');
    } else {
      result.push(proto.name);
    }
    proto = Object.getPrototypeOf(proto);
  }
  console.log(result);
}

// name property added to make objects easier to identify
const foo = {name: 'foo'};
const bar = Object.create(foo);
bar.name = 'bar';
const baz = Object.create(bar);
baz.name = 'baz';
const qux = Object.create(baz);
qux.name = 'qux';

qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
bar.ancestors();  // returns ['foo', 'Object.prototype']
foo.ancestors();  // returns ['Object.prototype']