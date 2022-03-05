//return true if the string looks like a URL
//make it so that http:// is at the front and .com is at the end

function isUrl(string){
  // regex is /^https?:\/\/\S+$/
  // first, have http at the start and one or none s chars
  // then : and // and \S at the end. \S is non whitespace
  let regex = /^https?:\/\/\S+(com)$/
  let result = !!string.match(regex);
  console.log(result)
  return result
}

isUrl('http://launchschool.com');   // -> true
isUrl('https://example.com');       // -> true
isUrl('https://example.com hello'); // -> false
isUrl('   https://example.com');    // -> false