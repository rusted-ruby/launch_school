/*
write a function that displayes an 8 pointed star in an nxn grid.
n is an odd integer greater than or equal to 7.

so... there's an upper portion, a middle row that has n stars in it, and a lower portion.
each row in the upper and lower portion has three stars in it always. the number of space
between the stars is changing.
definition: outer spaces (# of spaces before the stars) and inner spaces (number of spaces between stars)

n = 7: inner spaces is 2, outer spaces is zero
  (inner spaces * 2) - 3 = # of outer spaces
  innerspaces * 2 + 3 + # of outer spaces = n
  we know that the first time around, outer spaces will be 0.
  innerspaces * 2 + 3 + 0 = n => use this to get the iniital value of inner spaces. 

within each loop, we have innerspaces and outer spaces
  pass innerspaces and outer spaces to a printLine function to print the right lines. 
  each time we do this, innerSpaces is decremented by 1 and outerspaces is incremented by 1

first loop: want to iterate n -1 / 2 times
*/
const NUM_OF_STARS = 3

function printLine(outerSpaces, innerSpaces) {
  let str = ' '.repeat(outerSpaces) + '*' + ' '.repeat(innerSpaces) + '*' + ' '.repeat(innerSpaces) + '*'
  console.log(str)
}
function star(n) {
  let outerSpaces = 0;
  let innerSpaces = (n - NUM_OF_STARS) / 2;
  for (i = 0; i < (n - 1) / 2; i += 1) {
    printLine(outerSpaces,innerSpaces);
    outerSpaces += 1;
    innerSpaces -= 1;
  }
  outerSpaces -= 1;
  innerSpaces += 1;
  console.log('*'.repeat(n));
  for (i = 0; i < (n-1) / 2; i += 1) {
    printLine(outerSpaces, innerSpaces)
    outerSpaces -= 1;
    innerSpaces += 1;
  }
}

star(7);
// logs
/*
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *
*/

star(9)

/*
// logs
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *
*/

star(117)