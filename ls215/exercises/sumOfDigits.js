//given an integer, compute the sum of its digits ithout using a for, while or do while loop
//convert the integer to a string, then split it to an array and iterate. turn each
//char to a number and sum it

function sum(int) {
  let arr = String(int).split('')
  let result = arr.reduce((acc, cur) => {
    return acc += Number(cur)
  }, 0)
  console.log(result)
  return result
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45