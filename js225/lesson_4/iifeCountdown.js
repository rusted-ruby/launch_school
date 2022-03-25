function countdown(n){
  (function(n) {
    for (let i = n; i >= 0 ; i -= 1){
      console.log(i);
    }
    console.log("Done!");
  })(n)
}
countdown(4007);