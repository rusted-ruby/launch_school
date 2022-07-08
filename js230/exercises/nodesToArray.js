/*
  convert a DOM to nested arrays, starting at the body tag. 

  an element should be represented as [ELEMENT, [CHILDREN]], with each
  of the children being represented in the same way

  if an element does not have children, then the children aray should be
  empty. 

  okay, what to do?
    start with the body. put it into an array. 
    I'm leaning towards a recursive 'get children' function on this one.
    The body can have multiple children, 
    we want the same thing to happen for all of them, 
    and there's a clear end state (when there's no more decendants 
    for a given node).

    The only hard part will be deciding what to return...
    return [body, getchildren(body)]

    recursive function:
      get the children of the element passed in. turn them to an array
        if there are no children, return []
      get a map loop going for the array
        within the map loop, return [child name, getChildren(child)]

*/

document.addEventListener("DOMContentLoaded", event => {
  //["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]]
  console.log(nodesToArr());
})

function nodesToArr() {
  let body = document.querySelector('body');
  return [body.tagName, getChildren(body)]
}

function getChildren(ele) {
  let children = Array.prototype.slice.call(ele.children);
  if (children.length === 0) {
    return []
  } else {
    return children.map((child) => {
      return [child.tagName, getChildren(child)]
    })
  }
}

/*
  This works!
  What did LS do?
  Their solution looks a lot more complicated
    start with an array that has the body and the child elements of 
    body stuck into an array

    get the current parent nodes from the children of body.

    So for each child, they use loops to turn it into the same format
    desired: [TagName [child elements]]. They keep doing this until all
    child elements have been transformed into [TagName, []] format. 
*/