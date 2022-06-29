//what gets logged here?

const promise = new Promise(res => res(1));
promise
  .then((num) => {
    console.log(num); //1
    return num + 2;
  })
  .then((num) => {
    console.log(num); //3
    return num + 3;
  })
  .then((num) => {
    console.log(num); //6
    return num + 4;
  })
  .finally((num) => {
    console.log(num); //10 => nope, undefined
    return num + 5;
  });

  const promise = new Promise((resolve, reject) => {
    resolve("Got it!");
    reject("Oops.");
    resolve("Again!");
  });
  
  promise
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });