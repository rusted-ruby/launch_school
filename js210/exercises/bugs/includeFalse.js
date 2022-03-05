//search a list of values. if we find boolean false, return true at once. if we don't find 
//bool false, return false. 

//the problem is that we're using the loose equality operator to do the comparison. if its 
//comparing two values of different types, it will attempt to coerce one operand to a new type
//in this case, the problem comes when we attempt to coerce 0 into a boolean. 0 is a falsey
//value in js, so 0 == false evaluates to false == false, which will be true.
//to fix this, we can replace == with ===. this will ensure the condition is only true
//when we see boolena false, not a falsey value

//above is mostly right, except its not because 0 is falsey... null is falsey too and it 
//doesn't satisfy the condition. Its just because == was annoying coercive properties.

function includesFalse(list) {
  for (let i = 0; i < list.length; i++) {
    let element = list[i];

    if (element === false) {
      console.log(true);
      return true;
    }
  }
  console.log(false);
  return false;
}
                                                                  // returns:
includesFalse([8, null, 'abc', true, 'launch', 11, false]);       // true
includesFalse(['programming', undefined, 37, 64, true, 'false']); // false
includesFalse([9422, 'lambda', 0, true, null, '54']);             // true