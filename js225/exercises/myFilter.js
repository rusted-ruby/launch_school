//we've got a myFilter function that is a re-implementation of the 'filter' array method.
//we want to change it so that it supports a myArgs argument like the real Array method. 

function myFilter(array, func, ctx) {
  const result = [];
  let ctxFunc = func.bind(ctx)

  array.forEach(value => {
    if (ctxFunc(value)) {
      result.push(value);
    }
  });

  return result;
}

const filter = {
  allowedValues: [5, 6, 9],
};

let result = myFilter([2, 1, 3, 4, 5, 6, 12], function(val) {
  return this.allowedValues.includes(val);
}, filter); // returns [5, 6]

console.log(result)