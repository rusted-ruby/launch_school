let headers = document.getElementsByTagName('h2');
let wordCount = 0;
for (let j = 0; j < headers.length; j += 1 ) {
  let text = headers[j].textContent.trim().split(' ');
  wordCount += text.length;
}
console.log(wordCount);
