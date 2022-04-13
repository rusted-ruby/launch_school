let as = document.getElementsByTagName('A');
let count = 0;
for (i = 0; i < as.length; i += 1) {
  let ele = as[i];
  if (ele.hasAttribute('href')) {
    if (count % 2 === 1) {
      ele.style.color = 'green'
    }
    count += 1;
  }
}