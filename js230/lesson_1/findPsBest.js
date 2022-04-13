//given findPs.html, return the p elements from the dom. make it generally applicable though
//run this as a snippet on the findPs webpage.

let intros = document.getElementsByClassName('intro');
for (let i = 0; i < intros.length; i += 1) {
  let ele = intros[i]
  let introPs = ele.getElementsByTagName('p');
  for (let j = 0; j < introPs.length; j += 1 ) {
    let p = introPs[j];
    p.classList.add('article-text');
  }
}

