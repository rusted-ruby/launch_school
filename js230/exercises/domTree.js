//take an element's ID and return the DOM tree of the element... 
/*
  Or rather, return a 2D array... that does what exactly?
  first sub array contains the element and its siblings
  second sub array contains the element's parent and its siblings
  third sub array contains the grandparent and its siblings
  and so on to the final grandest parent.

  Hmmm... not sure what's going to be best to use here.... let's take a look 
  at the DOM traversal methods I have on hand. I know there are nextElementSibling methods
  that will likely be to my advantage here.

  They're listed in the order that they appear to.

  So here's what we do. for the first portion
    get the parent element of the element who's ID we passed in
    get the children of the parent element via the children property
    iterate over the children and get the tagName of each.
*/

function domTreeTracer(id) {
  //let initialEle = document.querySelector(`#${id}`);
  let initialEle = document.getElementById(String(id));
  let finalArr = [];
  let parent = initialEle.parentElement;
  while (parent.tagName !== 'HTML') {
    finalArr.push(getChildrenOf(parent))
    parent = parent.parentElement
  }

  return finalArr
}

function getChildrenOf(parent) {
  let siblings = parent.children;
  let siblingsArr = [];
  for (i = 0; i < siblings.length; i += 1) {
    let sibling = siblings[i];
    siblingsArr.push(sibling.tagName);
  }
  return siblingsArr
}

// > domTreeTracer(1);
// = [["ARTICLE"]]
// > domTreeTracer(2);
// = [["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]
// > domTreeTracer(22);
// = [["A"], ["STRONG"], ["SPAN", "SPAN"], ["P", "P"], ["SECTION", "SECTION"], ["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]

document.addEventListener("DOMContentLoaded", event => {
  console.log(domTreeTracer(1));
  console.log(domTreeTracer(2));
  console.log(domTreeTracer(22));
});

/*
  This one was tricky... what did LS do?
    pretty much the same thing that I did. 
*/