let firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Launch School")
  }, 2000)
})
firstPromise.then(message => {console.log(message)})

let errorPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error: Not Launch school")
  },2000)
})

errorPromise.catch(message => {console.log(message)})