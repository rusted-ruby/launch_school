let tc = document.querySelectorAll('.thumbcaption')
let textArr = [];
for (i = 0; i < tc.length; i += 1) {
  let ele = tc[i];
  let text = ele.textContent.trim();
  textArr.push(text);
}
console.log(textArr)