document.addEventListener('DOMContentLoaded', (event) => {
  let ele = document.querySelector('section');
  makeBold(ele, function(elem) {
    elem.classList.add('highlight');
  });
})

//can also add some checks to make sure callback is really a function. 
function makeBold(ele, callback){
  ele.style.fontWeight = 'bold'
  callback(ele);
}

