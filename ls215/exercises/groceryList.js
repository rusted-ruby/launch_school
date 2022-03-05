//take a grocery list as a two dimensional array that returns a one dimensional array
//how to do this? have two loops. One that uses forEach to iterate over each element
//of the list array. Then another that uses a for loop that starts at one and iterates until
//we hit the fruit number

function buyFruit(list) {
  let result = []
  list.forEach((element) => {
    let num = element[1];
    let item = element[0];
    for (let i = 0; i < num; i += 1) {
      result.push(item)
    }
  })
  console.log(result)
  return result
}

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

/*
what did LS do? Something weird. 
first, they use map to return an array of arrays. the sub arrays have the fruit name a specified
number of times. so it returns
[["apple", "apple", "apple"], ["orange"], etc]
then we call reduce to concatenate the arrays with each other.
*/