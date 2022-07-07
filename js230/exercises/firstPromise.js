let firstPromise = new Promise((res, rej) => {
  setTimeout(function() {rej("not launch school")}, 2000)
})

firstPromise.catch((resValue) => console.log(resValue))