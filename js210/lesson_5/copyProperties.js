//given two objects as arguments, copy all properties from the first to the second. 
//return the number of properties copied. 

function copyProperties(obj1, obj2) {
  let count = 0;
  for (let prop in obj1) {
    obj2[prop] = obj1[prop]
    count += 1
  }
  console.log(obj2)
  return count
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
copyProperties(hal, sal);  // 2
sal;                       // { model: 9000, enabled: true }