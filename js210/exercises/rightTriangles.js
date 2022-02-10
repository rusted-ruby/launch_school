//function should take an integer N and return a right triangle whose sides all have N stars
//so the strings on each row will be of length N. start by building the first string: all
//spaces, then one star. then create a loop that runs n - 1 times that takes the right most
//index that isn't a star and replaces it with a star.

//no, you'll need a loop that builds a new string every time, since you can't index into
//strings with js... ugh. 
//so i'll need two loops. one that runs n times to wipe the string clean, then another one 
//to build the string. The second one will need logic to control which places are stars,
//and which are strings... have a space index and a star index. The space index is the
//last index where spaces live. the star index is the first index where stars live.
//so the space index starts at n-2 and the star index starts at n-1

function triangle(n) {
  let spaceIx = n - 2;
  let starIx = n - 1;
  for (let i = 0; i < n; i += 1 ) {
    let str = ''
    for (let j = 0; j < n; j += 1 ) {
      if ( j <= spaceIx ) {
        str += ' ' 
      } else if (starIx <= j) {
        str += '*'
      }
    }
    console.log(str);
    spaceIx -= 1;
    starIx -= 1;
  }
}

triangle(5);

triangle(9);

triangle(29)
//what did LS do? they created a function called "repeat" that takes a char and a count
//and returns a string of length ount made up entirely of chars. Then they use it to
//create a substring of spaces and a substring of stars and add them together on each line.
//I like their solution better than mine because its more readable. 