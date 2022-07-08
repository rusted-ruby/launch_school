/*
  write a function that, given two valid node IDs, will swap those 
  nodes in the DOM. 

  return undefined if the swap is invalid
    a swap is invalid if one of the IDs doesn't exist
    a swap is invalid if one of the nodes is a child of the other. 

  Okay, those corner cases are fairly straightforward... but how do I
  actually perform the swap?

  I can use the insertAdjacentHTML element for this, right? But the problem
  is going to be that if I do that once, the first element I move will be
  gone... so there will be no frame of reference for where the second
  element should be. 

  That's the tricky part... the replace child functions are easy...
  Maybe the easiest thing to do is to copy the dom elements? then I 
  can easily replace the original 1 with the copy of 2 and vice versa.

*/

document.addEventListener("DOMContentLoaded", function(event) {
  console.log(nodeSwap(1, 20))
  console.log(nodeSwap(1, 4))
  console.log(nodeSwap(9, 3))
  console.log(nodeSwap(1,6))
  // console.log(nodeSwap(3, 1))
  // console.log(nodeSwap(7, 9))

})

function nodeSwap(id1, id2) {
  let ele1 = document.getElementById(id1);
  let ele2 = document.getElementById(id2);

  //dont swap if one ID doesn't exist
  if (!ele1 || !ele2) {
    return undefined
  }

  //don't swap if one element is the child of the other.
  let ele1Parent = ele1.parentNode;
  let ele2Parent = ele2.parentNode;
  if (ele1Parent === ele2 || ele2Parent === ele1) {
    return undefined
  }

  let ele1Clone = ele1.cloneNode(true);
  let ele2Clone = ele2.cloneNode(true);

  ele1Parent.replaceChild(ele2Clone, ele1);
  ele2Parent.replaceChild(ele1Clone, ele2);

  return true
}

/*
  Nice... now what did LS do?
  pretty much exactly what I did. Only difference is that they use a 
  method called "contains" to see if one element is the child of another. 
  That method is better than what I did because it checks ALL decendants
  of the parent node, where mine only checks direct children.
*/