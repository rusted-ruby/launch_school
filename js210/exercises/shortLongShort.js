//take two strings. find the longer one and the shorter one. then concatenate the strings
//so that the result is short - long - short. can assume strings are of different lengths.

//what will be the best way to decide which strings are long and which ones are short? There's 
//a convoluted way of doing it for sure... but what's a smooth way?

function shortLongShort(str1, str2) {
  l1 = str1.length;
  l2 = str2.length
  let short = ''
  let long = ''
  if (l1 > l2) {
    long = str1;
    short = str2
  } else {
    long = str2;
    short = str1;
  }
  console.log(short + long + short)
  return short + long + short
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"

//how did LS do it? instead of having vars for short and long, they just returned the proper
//statement directly within the if / else branches. 