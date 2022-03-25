function countdown(n){
  (function counter(n) {
    console.log(n)
    if (n <= 0) {
      console.log("Done!");
    } else {
      counter(n - 1)
    }
  })(n)
}
countdown(7);

//use recursion and an iife to make a countdown
//note that a named iife can be referenced inside the iife. 