import debounce from './debounce.js'

const Autocomplete = {

 //add an event listener to react to user input
  bindEvents: function() {
    //handle when a user inputs text into the input box
    this.input.addEventListener('input', this.valueChanged);
    //handle when a user selects a country from the autocomplete list via the arrow keys.
    this.input.addEventListener('keydown', this.handleKeyDown.bind(this));

    this.listUI.addEventListener('mousedown', this.handleMouseDown.bind(this));
  },

  handleMouseDown: function(event) {
    let selectedName = event.target.textContent;
    this.input.value = selectedName;
    this.reset();
  }, 

  //set the new selected index to be one above or one below the current selected index based
  //on if the user pressed the up key or the down key.
  //also handle tab completion
  handleKeyDown: function(event) {
    switch(event.key) {
      case'ArrowDown':
        event.preventDefault();
        if (this.selectedIndex === null || this.selectedIndex === this.matches.length - 1) {
          this.selectedIndex = 0;
        } else {
          this.selectedIndex += 1;
        }
        this.bestMatchIndex = null;
        this.draw();
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (this.selectedIndex === null || this.selectedIndex === 0 ) {
          this.selectedIndex = this.matches.length - 1;
        } else {
          this.selectedIndex -= 1;
        }
        this.bestMatchIndex = null;
        this.draw();
        break;
      //put the best suggestion in the input box and clear everything else if user 
      //presses tab while highlighting a suggestion.
      case'Tab':
        if (this.bestMatchIndex !== null && this.matches.length !== 0) {
          this.input.value = this.matches[this.bestMatchIndex].name;
          event.preventDefault();
        }
        this.reset();
        break;
      //reset the autocomplete, but leave the input value unchanged
      case'Enter':
        this.reset();
        break;
      //revert to the value the user previously typed
      case'Escape':
        this.input.value = this.previousValue;
        this.reset();
        break;
    }
  }, 

  //call either fetchMatches + draw or reset based on if we have input or not. 
  valueChanged: function() {
    let value = this.input.value;
    //selecting a suggestion with the arrow keys overwrites what the user wrote. We'll store 
    //the user value here in case we need it later.
    this.previousValue = value;
    if (value.length > 0) {
      //the visible property tells us if the overlay has any text in it
      //matches property contains the array of potential matches to display in the autocomplete box.
      //the anon function will be invoked by fetchMatches after an ajax request has been made to the server.
      //the anon function will format the results of the ajax call
      this.fetchMatches(value, matches => {
        this.visible = true;
        this.matches = matches;
        this.bestMatchIndex = 0; //use the first result in the overlay. 
        this.selectedIndex = null; //country name the user has selected with the arrow keys.
        this.draw();
      });
    } else {
      this.reset();
    }
  },

  //execute an ajax call to the server to find your query.
  //then, invoke the callback with the results of the query
  fetchMatches: function(query, callback) {
    let req = new XMLHttpRequest();
    //open a new xhr request with our text input as the query string. 
    req.open('GET', `${this.url}${encodeURIComponent(query)}`);
    req.responseType = 'json';
    req.send();

    //invoke the callback with the request's data once the request has been completed
    req.addEventListener('load', () => {
      callback(req.response);
    })
  },

  //format the data from the server to be displayed in the overlay and listUI dom elements
  draw: function() {
    //remove all child elements from the listUI dom element.
    //this clears all the suggestions from the previous user input. 
    while (this.listUI.lastChild){
      this.listUI.removeChild(this.listUI.lastChild)
    }

    //if the visible property doesn't exist, clear the overlay
    if (!this.visible){
      this.overlay.textContent = '';
      return
    }

    //pick a search result to be displayed in the input overlay. 
    if (this.bestMatchIndex !== null && this.matches.length !== 0) {
      let selected = this.matches[this.bestMatchIndex];
      this.overlay.textContent = this.generateOverlayContent(this.input.value, selected);
    } else {
      this.overlay.textContent = '';
    }

    //for each match from the server, create a list item dom element with the match as the content
    //add the list item as a child element to the listUI dom element
    this.matches.forEach((match, index) => {
      let li = document.createElement('li');
      li.classList.add('autocomplete-ui-choice');
      //if this is the suggestion the user has selected, add a class of selected to it so 
      //its formatted properly. also, put the selected value in the input text box.
      if (index === this.selectedIndex){
        li.classList.add('selected');
        this.input.value = match.name;
      }
      li.textContent = match.name;
      this.listUI.appendChild(li);
    })
  },

  //format the overlay: prevent misalignment if the input is all lowercase
  //combine the user's input value with a corresponding length of the match string
  generateOverlayContent: function(value, match) {
    let end = match.name.substr(value.length);
    return value + end;
  },

  //reset the UI if the user clears out the text input
  reset: function() {
    this.visible = false;
    this.matches = [];
    this.bestMatchIndex = null;
    this.selectedIndex = null;
    this.previousValue = null;
    //re-render the UI with the above params set to clear the UI.
    this.draw();
  },

  //wrap the input element inside a div element with a class of autocomplete-wrapper.
  //this is used for formatting purposes: see autocomplete.css
  wrapInput: function() {
    let wrapper = document.createElement('div');
    wrapper.classList.add('autocomplete-wrapper');
    this.input.parentNode.appendChild(wrapper);
    wrapper.appendChild(this.input);
  },

  //create two dom elements that are siblings to the text input. 
  //first, an unordered list with a class of autocomplete-ui. this will hold the countries we receive from the server
  //second, a div with a class of autocomplete-overlay. this will contain an overlay of the best match in the text box input.
  createUI: function() {
    let listUI = document.createElement('ul');
    listUI.classList.add('autocomplete-ui');
    this.input.parentNode.appendChild(listUI);
    this.listUI = listUI;

    let overlay = document.createElement('div');
    overlay.classList.add('autocomplete-overlay');
    overlay.style.width = `${this.input.clientWidth}px`;

    this.input.parentNode.appendChild(overlay);
    this.overlay = overlay;
  },

  //create two new properties for the autocomplete object. 
  //input is where the user will be entering a search term
  //url is what we'll use to fetch json data from the server.
  init: function() {
    this.input = document.querySelector('input');
    this.url = '/countries?matching=';

    this.listUI = null;
    this.overlay = null;

    this.wrapInput();
    this.createUI();
    //implement throttling for our keydown listener: only send ajax requests after a 300ms delay
    //this prevents us from sending unneeded ajax requests. 
    this.valueChanged = debounce(this.valueChanged.bind(this), 300);
    //add an event listener to the input element after the UI is loaded.
    this.bindEvents();
    //initialize our UI with a blank slate. 
    this.reset();
  }
};

//make sure the dom is ready before we load the UI.
document.addEventListener('DOMContentLoaded', () => {
  Autocomplete.init();
});