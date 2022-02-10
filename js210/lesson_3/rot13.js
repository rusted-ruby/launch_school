//rot13 is a cipher the rotates a letter by 13 places. so a becomes the letter 13 places
//after a (n). If there's a letter that reaches the end of the alphabet, it loops back around:
//so o becomes b.
//case should be preserved for these letters.
//letters that aren't characters should not be changed at all. 

//ASCII Chars
//lowercase a is 97. lowercase z is 122
//uppercase A is 65. uppercase Z is 90

//three main problems to solve here:
  //how to determine if a char is a letter or not => could have a long conditional for this:
  //So if char is between a and z, or char is between A and Z. stick it in a function for readibility

  //how to "loop" to the correct ascii value => 
  //what if we get the letter's base index? so if its lowercase, its base index is 96, if its uppercase,
  //the base index is 64. Then the normal index of a is 1, b is 2, etc. if the normal index
  //is greater than 13, then use normal index % 13 to get the new real index. Otherwise, just add 13 to 
  //the base index to get the ascii value.

  //that'll work. we'll need functions to determine if something is upper or lowercase to 
  //get the right base index though. then case will be preserved!

  //one last problem with zs: the loop offset won't work for them, since they'll have a 
  //normal index of 26, so 26 % 13 will be zero. That means they'll get 0 added to their base
  //index, which isn't a number. The offset there SHOULD be 13. Need to account for that in the code

const UPPER_BASE_INDEX = 64;
const LOWER_BASE_INDEX = 96;
const CIPHER_PLACES = 13;

function rot13(string) {
  let newStr = '';
  for( let i = 0; i < string.length; i += 1) {
    char = string[i];
    if (charIsAlphabetic(char)) {
      //rotate the char
      baseIndex = getBaseIndex(char)
      charAsciiNum = char.charCodeAt()
      normalIndex = charAsciiNum - baseIndex;
      if (normalIndex <= CIPHER_PLACES) {
        rotOffset = CIPHER_PLACES
        charAsciiNum += rotOffset
      } else {
        rotOffset = normalIndex % CIPHER_PLACES
        //handle the z case, which has a normal index of 26.
        if (rotOffset === 0 ) {
          rotOffset = CIPHER_PLACES
        }
        charAsciiNum = baseIndex + rotOffset
      }
      char = String.fromCharCode(charAsciiNum)
    }
    newStr += char;
  }
  return newStr
}

function charIsAlphabetic(char) {
  //returns true if the character is alphabetic
  return ('a' <= char && char <= 'z') || ('A' <= char && char <= 'Z')
}

//returns the correct base index for an alphabetic char: 96 for lowercase, 64 for uppercase
function getBaseIndex(char) {
  if ('a' <= char && char <= 'z') {
    return LOWER_BASE_INDEX
  } else if ('A' <= char && char <= 'Z') {
    return UPPER_BASE_INDEX
  }
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
//Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
//Teachers open the door, but you must enter by yourself.

//what did LS do? They had a really slick way of doing the looping: they did 
//(normal index + 13) % 26. But their normal index is one less than mine is. So in theirs, 
//a is 0 instead of 1. That's a slicker way of doing it because you don't need to account for
//the z case. 