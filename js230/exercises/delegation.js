document.addEventListener('DOMContentLoaded', () => {
  // Possible elements for use with the scenarios
  const element1 = document.querySelector('table');
  const element2 = document.querySelector('main h1');
  const element3 = document.querySelector('main');

  console.log(delegateEvent(element2, 'p', 'click', callback));
})

// Possible callback for use with the scenarios
const callback = ({target, currentTarget}) => {
  alert(`Target: ${target.tagName}\nCurrent Target: ${currentTarget.tagName}`);
};

//you attach the event listener to the element, but it needs to only
//fire if you click its child thats described by a selector... isn't 
//there some way we can do that?

//ah, so it looks like we wrap the callback in another js function that
//gets the new event target... 
function delegateEvent(element, selectorString, eventType, callback) {
  if (element) {
    console.log('have an element')
    element.addEventListener(eventType, (event) => {
      console.log(event.target);
      console.log(element.querySelector(selectorString));
      //need to know if the event target is a decendant of the query 
      //selector element
      if (eventTargetIsChildOf(element, event, selectorString)) {
        callback(event)
      }
    })
    return true
  }
  return undefined
}

function eventTargetIsChildOf(element, event, selectorString) {
  let eventTarget = event.target;
  let check = false;
  let children = document.querySelectorAll(selectorString);
  children.forEach((child) => {
    if (child === eventTarget) {
      check = true
    }
  });
  return check
}

/*
  What did LS do?
    Well, I needed the hint of the basics of what the function was doing.
    They use Array.prototype.slice.call(element.querySelectorAll(selector))
    to create a formal array of the dom elements that are valid targets. 
    after that, we can use the Array.includes method on the array to see
    if it includes our event target. Same principle, different impl
    */