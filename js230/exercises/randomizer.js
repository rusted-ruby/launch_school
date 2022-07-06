//randomizer accepts n callbacks and calls each one at some random
//point of time between now and 2 * n


function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(...callbacks) {
  //log each second as it passes. Need to have the break condition 
  //within the delay loop.
  let secondsElapsed= 0;
  let secondsEnd = callbacks.length * 2
  const id = setInterval(() => {
    secondsElapsed += 1;
    console.log(secondsElapsed);
    if (secondsElapsed >= secondsEnd) {
      clearInterval(id)
    }
  }, 1000);

  callbacks.forEach((callback) => {
    let randSecs = Math.floor(Math.random() * callbacks.length * 2 + 1) * 1000;
    setTimeout(callback, randSecs);
  });

}

randomizer(callback1, callback2, callback3);