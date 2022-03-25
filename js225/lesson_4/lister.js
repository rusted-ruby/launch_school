//Write a function named makeMultipleLister that, when invoked and passed a number, 
//returns a function that logs every positive integer multiple of that number less than 100.

function makeMultipleLister(start) {
  return function(){
    for (let i = start ; i <= 100; i += start ){
      console.log(i)
    }
  }
}
let lister = makeMultipleLister(13);
lister();