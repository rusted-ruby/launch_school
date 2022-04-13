//given findPs.html, return the p elements from the dom
//run this as a snippet on the findPs webpage.
function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}
let ps = [];
walk(document, node => {
  if (node.tagName === 'P') {
    ps.push(node)
  }
})

console.log(ps)