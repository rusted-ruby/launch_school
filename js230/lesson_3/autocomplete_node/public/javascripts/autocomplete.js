import debounce from './debounce.js'

class Autocomplete {
  //create the autocomplete window.
  constructor (input, url) {
    //input element the user interacts with and types text into
    this.input = input;

    //url = the start of the url we're querying
    this.url = url;

    //list of suggested countries
    this.listUI = null;

    //best matching country displayed in the text box
    this.overlay = null;

    //this will tell draw if it should display matches
    this.visible = true;

    //this stores matches for the current user input
    this.matches = [];

    //make it so that with each keydown event, we only sent an xhr
    //request after 300 ms
    this.valueChanged = debounce(this.valueChanged.bind(this), 300);

    this.wrapInput();
    this.createUI();
    this.bindEvents();
    this.reset();
  }

  //create a new div element and add it to the input html
  wrapInput() {
    let wrapper = document.createElement('div');
    wrapper.classList.add('autocomplete-wrapper');
    this.input.parentNode.appendChild(wrapper);
    wrapper.appendChild(this.input);
  }

  //adda ui and overlay to the html input
  createUI() {
    let listUI = document.createElement('ul');
    listUI.classList.add('autocomplete-ui');
    this.input.parentNode.appendChild(listUI);
    this.listUI = listUI;

    let overlay = document.createElement('div');
    overlay.classList.add('autocomplete-overlay');
    overlay.style.width = `${this.input.clientWidth}px`;

    this.input.parentNode.appendChild(overlay);
    this.overlay = overlay;
  }

  //upon input, call value changed... what's bind do here?
  bindEvents() {
    //handle input change. display matches and overlay
    this.input.addEventListener('input', this.valueChanged);
    //handle keydown events for user highlighting
    this.input.addEventListener('keydown', this.handleKeydown.bind(this));
  
    this.listUI.addEventListener('mousedown', this.handleMousedown.bind(this));
  }


  handleMousedown(event) {
    //event.target is the list item the user clicked on
    let li = event.target;
    this.input.value = li.textContent;
    this.reset();
  }

  handleKeydown(event) {
    switch(event.key) {
      case 'ArrowDown': 
        //What's this event's default behavior and why do we need to
        //prevent it?
        event.preventDefault();
        //start at the top if the user hasn't selected anything, or 
        //they're at the end of the matches
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
      //on tab, automatically choose the best match
      case 'Tab': 
        if (this.bestMatchIndex !== null && this.matches.length !== 0)  {
          this.input.value = this.matches[this.bestMatchIndex].name;
          event.preventDefault();
        }
        this.reset();
        break;
      //on esc, revert to previously typed input
      case 'Escape':
        this.input.value = this.previousValue;
        this.reset();
        break;
      //reset autocomplete, but leave the input value where it is
      case 'Enter':
        this.reset();
        break;
    }
  }

  //fetchMatches will issue a call to the server to get matches
  //draw will parse matches and display them in the listUI & overlay
  //reset will clear the listUI and overlay if there's no user input
  valueChanged() {
    let value = this.input.value;

    //remember what the user typed before in case they traverse matches
    //and need to revert
    this.previousValue = value;

    if (value.length > 0) {
      this.fetchMatches(value, matches => {
        this.visible = true,
        this.matches = matches;
        this.bestMatchIndex = 0;
        this.selectedIndex = null;
        this.draw();
      });
    } else {
      this.reset();
    }
  }

  fetchMatches(query, callback) {
    let request = new XMLHttpRequest();

    //execute the callback when the request finishes (in this case, 
    //the callback will parse matches and put them in the app)
    request.addEventListener('load', () => {
      callback(request.response);
    });

    //send the request
    request.open('GET', `${this.url}${encodeURIComponent(query)}`);
    request.responseType = 'json';
    request.send();
  }

  draw() {
    //clear the listUI's children. This resets our auto suggestions
    while (this.listUI.lastChild) {
      this.listUI.removeChild(this.listUI.lastChild)
    }

    //should we display the overlay or not?
    if (!this.visible) {
      this.overlay.textContent = '';
      return;
    }

    //render the best suggestion in the overlay
    if (this.bestMatchIndex !== null && this.matches.length !== 0 ) {
      let selected = this.matches[this.bestMatchIndex];
      this.overlay.textContent = this.generateOverlayContent(this.input.value, selected);
    } else {
      this.overlay.textContent = '';
    }

    //this.matches is an array of js objects with keys for name and id
    //of our countries.
    this.matches.forEach((match, index) => {
      //create a new list item and add a class to it for formatting
      let li = document.createElement('li');
      li.classList.add('autocomplete-ui-choice');

      //handle user's selection. Selected name is in the text box.
      if (index === this.selectedIndex) {
        li.classList.add('selected');
        this.input.value = match.name;
      }

      //update the li's text content to the match and add it to listUI
      li.textContent = match.name;
      this.listUI.appendChild(li);
    })
  }

  generateOverlayContent(value, match) {
    //take values of match starting from the last letter of value
    let end = match.name.substr(value.length);
    return value + end
  }

  //clear the UI and overlay
  reset() {
    this.visible = false;
    this.matches = [];
    this.bestMatchIndex = null;
    this.selectedIndex = null;
    this.previousValue = null;
    this.draw();
  }
};

//create the autocomplete window when the DOM loads. 
document.addEventListener('DOMContentLoaded', () => {
  let input = document.querySelector('input');
  let autocomplete = new Autocomplete(input, "/countries?matching=");
});