//use a regex to split the date up into an array, then reverse it and join it

function formatDate(str) { 
  let regex = /^(\d\d\d\d)-(\d\d)-(\d\d)$/
  let result = str.replace(regex, '$3.$2.$1');
  console.log(result)
  return result
}

formatDate('2016-06-17'); // -> '17.06.2016'
formatDate('2016/06/17'); // -> '2016/06/17' (no change)

//do more date formatting
function formatDate2(str) { 
  //four nums, either - or /, two numbers, either - or / (same as the one before) then 2 nums
  //the '$4.$3.$1' string refers to the capture groups. These are just expressions within the
  //parentheses. 
  let regex = /^(\d\d\d\d)([-/])(\d\d)\2(\d\d)$/
  let result = str.replace(regex, '$4.$3.$1');
  console.log(result)
  return result
}
console.log()
formatDate2('2016-06-17'); // -> '17.06.2016'
formatDate2('2017/05/03'); // -> '03.05.2017'
formatDate2('2015/01-31'); // -> '2015/01-31' (no change)