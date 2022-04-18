function afterNSeconds(callback, n){
  setTimeout(callback, n * 1000)
}
afterNSeconds(function() {
  console.log('four seconds')
}, 4)