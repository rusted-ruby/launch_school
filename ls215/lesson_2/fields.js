//separate the string into its pieces. there can be a lot of different chars as delims
//so I'm thinking chars should be whitespace and commas. use \w for that

//this doesn't work: provides empty fields where each delimiter is. 
function fields1(str) {
  let regex = /\b\w*\b/g
  let result = str.match(regex);
  console.log(result)
  return result
}

//LS does this. didn't know you could split based on a regex
function fields(str) {
  //one or more space, tab or comma
  let regex = /[ \t,]+/
  let result = str.split(regex) 
  console.log(result)
  return result
}


fields("Pete,201,Student");
// -> ['Pete', '201', 'Student']

fields("Pete \t 201    ,  TA");
// -> ['Pete', '201', 'TA']

fields("Pete \t 201");
// -> ['Pete', '201']

fields("Pete \n 201");
// -> ['Pete', '\n', '201']