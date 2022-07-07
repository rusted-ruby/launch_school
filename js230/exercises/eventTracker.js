/*
  create an event tracker object: wrap the callback in a fn that adds
  each event object to a tracker object. 

  We'll also need some methods on it as well
    []list
    []elements
    []clear

  List should be private
*/
let tracker;
(function()  {
  eventsTracked = [];
  elementsTracked = [];
  tracker = {
    //need to return a copy of this array, not an array itself
    list: function() {
      return eventsTracked.slice()
    },

    elements: function() {
      return elementsTracked.slice()
    },

    clear: function() {
      eventsTracked = [];
      elementsTracked = [];
    },

    addEvent: function(event) {
      eventsTracked.push(event);
      elementsTracked.push(event.target)
    }
  }
})();

//I guess we're able to just use the event?
function track(callback) {
  function eventAlreadyTracked(events, event) {
    return events.includes(event)
  }
  return event => {
    if (!eventAlreadyTracked(tracker.list(), event)) {
      tracker.addEvent(event)
    }
    callback(event)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let divRed = document.querySelector('div#red');
  let divBlue = document.querySelector('div#blue');
  let divOrange = document.querySelector('div#orange');
  let divGreen = document.querySelector('div#green');
  divRed.addEventListener('click', track(event => {
    document.body.style.background = 'red';
  }));
  
  divBlue.addEventListener('click', track(event => {
    event.stopPropagation();
    document.body.style.background = 'blue';
  }));
  
  divOrange.addEventListener('click', track(event => {
    document.body.style.background = 'orange';
  }));
  
  divGreen.addEventListener('click', track(event => {
    document.body.style.background = 'green';
  }));
})