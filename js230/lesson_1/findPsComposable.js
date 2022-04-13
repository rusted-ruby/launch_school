//given findPs.html, return the p elements from the dom. make it generally applicable though
//run this as a snippet on the findPs webpage.
function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}
function getElements(elementName) {
  let list = []
  walk(document, node => {
    if (node.tagName === elementName) {
      list.push(node)
    }
  })
  return list
}
let ps = getElements('P');
ps.forEach((node) => {
  node.classList.add('article-text')
})