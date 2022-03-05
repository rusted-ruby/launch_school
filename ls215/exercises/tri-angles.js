/*
Now, write a function that takes three angle measurements and returns the angle classification
of a triangle. Here are the possible values
  Right: one angle is 90
  Acute: all three angles are less than 90
  Obtuse: one angle is greater than 90

angles also must not be invalid. a valid triangle has the following:
  three angles MUST sum to 180
  all angles must be greater than zero. 

assume that all ainputs are integers and all angle measurements are in degrees. 

we'll hand

What did LS do?
they stored the angles in an array and used lots of array abstractions to handle the triangle 
type. For example, they used EVERY with a callback that checked if the angle is less than
90 to see if there's an acute triangle. The used SOME with a callback that checked if one angle
is equal to 90 to see if its a right triangle. they also used reduce to sum the angle values
and every to make sure that all angles were greater than zero. 
*/

function invalidTriangle(a1, a2, a3) {
  //handle the zero case
  if (a1 <= 0 || a2 <= 0 || a3 <= 0) {
    return true
  }

  //handle the angle sum case
  if (a1 + a2 + a3 !== 180) {
    return true
  }

  return false
}

function triangle(a1, a2, a3) {
  if (invalidTriangle(a1, a2, a3)) {
    console.log("invalid");
    return "invalid"
  } else if (a1 === 90 || a2 === 90 || a3 === 90) {
    console.log("right");
    return "right"
  } else if (a1 > 90 || a2 > 90 || a3 > 90 ) {
    console.log("obtuse");
    return "obtuse"
  } else if (a1 < 90 && a2 < 90 && a3 < 90) {
    console.log("acute");
    return "acute"
  } else {
    console.log("error");
    return "error"
  }
}

//test cases
triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(30, -90, 60);        // "invalid"
triangle(50, 50, 50);       // "invalid"