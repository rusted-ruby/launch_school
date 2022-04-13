//given newClasss.html, add the class 'article-text' to each p tag
//run this as a snippet on the findPs webpage.
function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

walk(document, node => {
  if (node.tagName === 'P') {
    node.classList.add('article-text')
  }
})