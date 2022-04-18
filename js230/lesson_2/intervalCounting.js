let num = 1;
function callback() {
  console.log(num)
  num += 1;
}

let id = setInterval(callback, 1000)

function stopCounting(id){
  setTimeout(() => {
    clearInterval(id)
  }, 15000)
}
stopCounting(id)