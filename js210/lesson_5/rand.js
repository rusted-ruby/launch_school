//code a random number generator using Math.rand. The function should return an integer between
//two arguments that ar epassed in, inclusive of the integers. 
//the function should handle the case that the we don't know which param is largest,
//and should handle the case that both values are equal. 

//two problems to solve:
  //how to get the random integer from Math.random => get a random decimal between 0 and 1 (
    //exclusive of one). So ceil will probably be put into play here... could do the average
    //of the arguments times the random decimal... that could work! Nope, that math doesn't 
    //add up... looks like its rand * (max - min + 1) + min
  //how to figure out which value passed in is larger. could do this with an if statment

function random(val1, val2) {
  let max;
  let min;
  if (val1 >= val2) {
    max = val1;
    min = val2;
  } else{
    max = val2;
    min = val1;
  }
  //console.log('max', max);
 // console.log('min', min);
  let rand = Math.random();
  //console.log('rand', rand);
  let result = Math.floor(rand * (max - min + 1) + min);
  console.log(result);
  return result
}


random(1,1);
random(5,45);
random(65, 9);
random(6,600);

random(4,6);