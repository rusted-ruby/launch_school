/*
  write a function to color a specific generation of the DOM tree. 

  generation = set of elements on the same level of indentation.

  oh God, how the hell am I going to do this? Theres no parent / child
  relationship to go on. No sibling relationship to go on... The best 
  I can think of is something like this:

  start at the body and walk inwards (do a while loop instead of recursion)
    walk the children until you find the element with the 
    ID you're looking for. Track how many levels deep it is. 

    for each child of the body element, set the class of each decendant
    that's the same number of indentations in as the one you want. 

  Ugh, this one is tough. I have no idea what I'm doing here. Took a 
  look at the hint

  See if I can find a way to get all the child elements of a node...
  all children meaning all decendants. 

*/

document.addEventListener('DOMContentLoaded', event => {
  colorGeneration(0);
})



function colorGeneration(targetGen) {
  console.log('in function')
  let body = document.querySelector('body');
  //console.log(body)
  //function that gets all children of the element you pass in
  //start at the body, then run this targetGen number of times
  // that should give you everything you need... assuming that given
  //an array of dom elements, this gives back an array of subarrays containing
  //each dom element's children or NOTHING if the dom element doesn't have children.
  // let article = document.querySelector('article');
  // getAllChildrenOf([article])
  if (targetGen === 0) {
    return
  }
  let currentGen = 0;
  let currentEle = [body]
  while (currentGen < targetGen) {
    currentEle = getAllChildrenOf(currentEle)
    currentGen += 1
  }

  currentEle.forEach((element) => {
    element.classList.add('generation-color');
  })
  
}

function getAllChildrenOf(eleArr) {
  //need the callback to replace the element with an array that 
  //contains all of its children... 
  //the problem is that sometimes the element isn't going to be an element at
  //all... sometimes its going to be an array of elements...
  //that'll run into problems, but let's see where this gets us

  //problem here is that the arrays are nested... we'd rather them not
  //be. That must be what the reduce is for... to un-nest the arrays...
  //we need them flattened!
  let finalArr = eleArr.map((element) => {
    return Array.prototype.slice.call(element.children)
  }).reduce((previousVal, currentVal) => {
    return previousVal.concat(currentVal)
  }, [])
  console.log('final array', finalArr)
  return finalArr
}



// function colorGeneration(id) {
//   let eleToFind = document.getElementById(String(id));
//   let body = document.querySelector('body');

//   let levelsDeep = 0;


//   let currentElement = body;
//   //let currentChildren = body.children;

//   while (check) {
//     levelsDeep += 1;
//     let children = currentElement.children
//     if (walkChildren(children, eleToFind)) {
//       break
//     }

//   }
// }

// function walkChildren(children, eleToFind) {
//   for (let i = 0; i < children.length; i += 1) {
//     let child = children[i];
//     if (child === eleToFind){
//       return true
//     }
//   }
//   return false
// }

//wtf is this doing? 
//I guess its something along the lines of calling node.children on each
//child in the array and appending the result to the new array... it looks like 
//I'll need to come back to this later.
// function getAllChildrenOf(parents) {
//   return parents.map(({children}) => Array.prototype.slice.call(children)).reduce((collection, children) => collection.concat(children), []);
// }