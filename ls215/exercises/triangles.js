/*
write a function that takes three numbers as input. it tells us what kind of triangle the
three numbers make. either
  equilateral: all three sides are equal
  isosceles: two sides are equal
  scalene: all three sides are of a different length.
  invalid: see below.

an valid triangle has
  all sides greater than zero
  the sum of the two shortest sides must be greater than the sum of the longest side

this should be easy with an if else branch. have one function that returns boolena true
for each condition. start out with the invalid one first, then go to the other ones

Only tricky piece is how to find the longest side that's passed in.
could do this with a sort function: store the sides in an array, sort it and sum the 
first two elements and compare the sum to the last element.

What did LS do? 
  pretty much the same thing as me. Except they got the longest, middle and shortest sides
  using Math methods that I didn't even think about. 

  const perimeter = side1 + side2 + side3;
  const longest = Math.max(side1, side2, side3);
  const shortest = Math.min(side1, side2, side3);
  const middle = perimeter - longest - shortest;
*/

function isEquliateral(s1, s2, s3) {
  return (s1 === s2 && s2 === s3)
}

function isIsosceles(s1, s2, s3) {
  return (s1 === s2 || s2 === s3 || s1 === s3)
}

function isInvalid(s1,s2,s3) {
  //handle the 0 case
  if (s1 <= 0 || s2 <= 0 || s3 <= 0) {
    return true
  }
  let arr = [s1, s2, s3]
  arr.sort((ele1, ele2) => {
    if (ele1 < ele2) {
      return -1
    } else if (ele1 > ele2) {
      return 1
    } else if (ele1 === ele2) {
      return 0
    }
  })
  let largest = arr.pop()
  if (largest > arr[0] + arr[1]) {
    return true
  }
  return false
}

function triangle(s1, s2, s3) {
  if (isInvalid(s1, s2, s3)) {
    console.log("invalid");
    return "invalid"
  } else if(isEquliateral(s1, s2, s3)) {
    console.log("equilateral");
    return "equilateral"
  } else if (isIsosceles(s1,s2,s3)) {
    console.log("isosceles");
    return "isosceles"
  } else {
    console.log("Scalene");
    return "Scalene"
  }
}

//test cases
triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"
triangle(-1, 3, 3);        // "invalid"
triangle(1, 3, 1);        // "invalid"