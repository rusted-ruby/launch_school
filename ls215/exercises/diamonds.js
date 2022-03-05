/*
input: odd integer
output: none
side effects: print a diamond to the console. 

diamond(5) => break apart this test case
  *  
 *** 
*****
 *** 
  *  
Theres always a middle row of n stars.
Each row has an odd number of stars, appended by spaces. 
star num starts at 1 and is incremented by 2 every row (on the way up until we hit n)
then star num is decremented by 2 after that. 

Two loops
  one that starts at 1 and goes until startnum = n,
    pass star num to a function that prints the star num centered in spaces
    increment star num by 2

outside the loop decrement starNum by two

  second loop starts at starnum = n-2 and goes until starnum = 1
  pass star num to a function that prints starNum centered in spaces
  decrement starnum by 2


starPrinter function
input = starNum and n
  init spaceNum as n - starNum
  spaceNum / 2 spaces + starNum stars + spaceNum / 2 spaces
then print the string

What did LS do?
  pretty similar to my strategy, but they didn't use two loops. They start by building an array
  of the number of stars that belong on each row. so rather than controlling starNum with two
  loops, they just iterate through an array

  Their way of building the starNum array is pretty cool. The third statement of the for loop
  is i + val. val starts off at two, but once i is equal to n, val becomes negative two. The 
  loop ends when i is less than zero. So its a really slick way of creating an array of numbers
  that rises in one half, peaks in the middle, then falls in the second half. 
*/

function starPrinter(starNum, n) {
  let spaceNum = n - starNum;
  let str = ' '.repeat(spaceNum / 2) + "*".repeat(starNum) + ' '.repeat(spaceNum / 2);
  console.log(str)
}

function diamond(n) {
  let starNum = 1;
  for (starNum; starNum <= n; starNum += 2) {
    starPrinter(starNum, n)
  }
  starNum -= 4;
  for (starNum; starNum >= 1; starNum -= 2) {
    starPrinter(starNum, n)
  }
}

diamond(1);
// logs
//*
diamond(3);
// logs
/*
 *
***
 *
*/
diamond(5)
diamond(9);
diamond(27)
diamond(117) //pretty