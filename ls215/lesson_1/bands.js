//write some code to format info for objects that contain info on bands. In particular
  //all countries should be canada.
  //the first letter in each word should be capped
  //there should be no dots in the band names

//sounds like this is a job for map. We'll need to build a new object in the callback. set the
//country to canada and invoke a processor function for the name
//how to process the name?
  //split the array into an array of chars and iterate. we'll probs want a formal forEach
  //if we're at index 0, or the previous index is a space, cap the current index
  //if the current index is . then don't push it to the new array
  //join the new array and return it.

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processName(name) {
  let charArr = name.split('');
  let newArr = []
  for (let i = 0; i < charArr.length; i += 1) {
    if (charArr[i] === '.') {
      continue
    } else if (i === 0 || charArr[i - 1] === ' ' ) {
      newArr.push(charArr[i].toUpperCase())
    } else {
      newArr.push(charArr[i])
    }
  }
  return newArr.join('')
}

function processBands(data) {
  return data.map((band) => {
    return {
      name: processName(band.name),
      country: 'Canada',
      active: band.active
    }
  })
}

console.log(processBands(bands));

// should return:
/*
[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]
*/