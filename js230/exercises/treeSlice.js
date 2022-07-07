/*
  Create an array.slice method, but for the DOM tree.
    start index is parent node's ID attr
    end index is the innermost child's ID attr
  return an array of tag names. 

  Here are the catches
    only elements with 'body' as an ancestor are sliceable
    if the id of start or end isn't in dom, return undefined
    if the slice path isn't feasable, return undefined. 
  
  So first, I'll need to make sure that I can get all the children
  of a given element... or at least look through the children to see if
  the the end index ID lives in the decendants somewhere... this will
  be the trickiest part, finding the siblings

  Well, I'll need to do that anyway... Might as well build an array of 
  tagNames of decendants while I'm doing that, and if we don't find 
  our end index I can return undefined.

  But then, what if there are multiple children... I need an array
  of descendants that starts at the start and ends at the end... How
  can I build that? I think I'll need some kind of recursive fn. 
*/

function sliceTree(startId, endId) {
  let startEle = document.getElementById(String(startId));
  let endEle = document.getElementById(String(endId));

  //if we can't find our elements in the dom, return undefined;
  if (!startEle || !endEle) {
    return undefined
  }
  //debugger
  let startElementChildren = walkFromStart(startEle.parentNode, endEle, []);

  //if we couldn't find a path from the start to end child, return undefined
  if (!startElementChildren) {
    return undefined
  }

  finalArr = []
  for (let i = 0; i < startElementChildren.length; i += 1) {
    finalArr.push(startElementChildren[i].tagName);
  }

  return finalArr
}

function walkFromStart(startEle, endEle, trackedChildren) {
  let children = startEle.children;
  for (let i = 0; i < children.length; i += 1) {
    let child = children[i];
    //problem with recursion: we're tracking all the failed attempts
    //if we want to do this...
    trackedChildren.push(child);
    if (child === endEle) {
      return trackedChildren
    } else {
      //return the recursive result if its the one we want
      let result = walkFromStart(child, endEle, trackedChildren);
      if (result) {
        return result
      } else {
        trackedChildren = trackedChildren.slice(0,1)
      }
    }
  }
  return undefined
}

document.addEventListener('DOMContentLoaded', event => {
  console.log(sliceTree(1,4));
  console.log(sliceTree(1,76));
  console.log(sliceTree(2,5));
  console.log(sliceTree(5,4));
  console.log(sliceTree(1,23));
  console.log(sliceTree(1,22));
  console.log(sliceTree(11,19));
})

// > sliceTree(1, 4);
// = ["ARTICLE", "HEADER", "SPAN", "A"]
// > sliceTree(1, 76);
// = undefined
// > sliceTree(2, 5);
// = undefined
// > sliceTree(5, 4);
// = undefined
// > sliceTree(1, 23);
// = ["ARTICLE", "FOOTER"]
// > sliceTree(1, 22);
// = ["ARTICLE", "MAIN", "SECTION", "P", "SPAN", "STRONG", "A"]
// > sliceTree(11, 19);
// = ["SECTION", "P", "SPAN", "STRONG", "A"]

/*
  Okay, I'm stuck. How the hell do I do this?
  Used a while loop and unshift. unshift adds an element to the start 
  of an array and returns the new length of the array. 
  So they add the end element to the array via unshift. Then configure
  the ened element to be the parent node

  Ah, so they started at the child and worked out. I started at the parent
  and worked in. They have a while condition that terminates when the 
  element they're looking at is the start element, or the body element

  finally, their return statement is one of these logic gates : ? that
  makes sure the end element is the body element and the current
  element the loop looked at is the starting element's ID. 

  So I was so focused on solving a problem the hard way I didn't see the
  easy way... story of my life I guess.
*/