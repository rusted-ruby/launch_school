function afterNSeconds(callback, n) {
  setTimeout(callback, n * 1000)
}

afterNSeconds(function () {
  console.log("YUH");
}, 5);