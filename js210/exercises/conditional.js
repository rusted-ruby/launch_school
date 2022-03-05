//this code is suppsoed to log each number between 0 and 9 that's a multiple of 3. Will it do
//that? No. The problem is with i's incrementation. If we have a multiple of 3, i is never 
//incremented. We'll just print 3 to the console forever if we run this.

//well I was wrong, since 0 % 3 is 0, but we'll still log an infinite loop if we do this. 


let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}