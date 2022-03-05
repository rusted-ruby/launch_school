//function should return the next to last word in a phrase, but isn't. Fix it. 

//now its working :O

function penultimate(string) {
  let strArr = string.split(' ');
  console.log(strArr[strArr.length - 2])
  return strArr[strArr.length - 2]
}

penultimate('last word');                    // expected: "last"
penultimate('Launch School is great!');      // expected: "is"

//could also have used strArr.slice(-2, -1) to do this, since you can use negative indicies
//with that method.