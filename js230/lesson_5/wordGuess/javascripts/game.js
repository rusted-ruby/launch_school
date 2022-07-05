/*
  what needs to happen here? 
    setup the page
      pick a random word
      create span elements within the word value for each char in the word
    listen to keydown events for text. 
      make sure the user's input is letters.... not sure how that will go.
      For each letter, see if its inside the word.
        if it isn't, 
          create a span element in guesses with the letter within it
          increment the class on the apples image
        if it is
          find out where in the word the user's guess is
          display that guess in the proper places in the word element's spans
      
      if the user reaches 6 guesses
        display a loss message
        reset the game and play again
      
      if the user gets the full guess
        display a win message
        reset the game and play again.

    
  resetting the game means that you don't allow the word to be selected agian

  If we're out of words, tell the user they can't play again :(

  when the game is over, display a link that the user can click to
  play again. 

*/

var game;
(function() {
  game = {
    words: ["apple", "banana", "orange", "kiwi"],
    ALPHABET: 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM',
    currentWord: '',
    incorrectGuesses: 0,
    lettersGuessed: [],
    allowedWrongGuesses: 6,

    randomWord: function() {
      //random number from 0 to WORDS.length - 1
      let idx = Math.floor(Math.random() * this.words.length);
      let word = this.words[idx];

      //remove the selected word from the array... there must be something going wrong here. 
      this.words.splice(idx, 1);
      return word
    },

    //main game loop: what does this need to do?
      //setup the game
      //create a loop?
    start: function() {
      let word = this.randomWord();

      //don't enter the game loop if we're out of words. 
      if (word === undefined) {
        this.setMessage("We're all out of words! Goodbye!");
        return;
      }

      this.currentWord = word;

      this.initWordField();
    },

    //what needs to happen here? 
      //[x] reset game internal state
      //[x] hide play again link.
      //[x] wipe the spans from #guesses
      //[x] wipe the spans from #spaces
      //[] reset apples
    reset: function() {
      $('a#play_again').addClass('hidden');
      this.incorrectGuesses = 0;
      this.lettersGuessed = [];
      this.currentWord = '';

      this.setMessage('guessing game');

      //remove all span elements from the dom
      $('span').remove();

      $('#apples').attr('class', '');
    },

    //this will be the callback of a keydown event.
    processKeystroke(event) {
      event.preventDefault();
      //make sure the user's keystroke is a letter
      let guess = event.key;
      if (this.guessShouldNotCount(guess)) {
        return;
      }

      if (this.letterIsInCurrentWord(guess)) {
        //handle correct guess
        this.handleCorrectGuess(guess);
      } else {
        //handle incorrect guess
        this.handleIncorrectGuess(guess);
      }
    },

    initWordField() {
      let numSpans = this.currentWord.length;
      for (let i = 0; i < numSpans; i += 1) {
        let $newSpan = this.createSpan('');
        $('#spaces').append($newSpan);
      }
    },

    //update internal state
    //add the letter the user picked to the guess span
    //if the game is over, display loser state
    handleIncorrectGuess: function(guess) {
      this.updateInternalState(guess, true);
      this.updateApples();
      this.updateGuessElement(guess);
      if (this.gameIsOver()) {
        this.displayLoserState()
      }
    },


    //add the letter the user picked to the word span
    //add the letter the user picked to the guess span
    //update internal state
    //if the user guessed the full word, display victory state
    handleCorrectGuess: function(guess) {
     this.updateInternalState(guess);
     this.updateWordElement(guess);
     this.updateGuessElement(guess);

     if (this.userWonGame()) {
      this.displayWinnerState();
     }
    },

    gameIsOver: function() {
      return this.incorrectGuesses === this.allowedWrongGuesses
    },

    //if the guess isn't a letter, or if the user has guessed the value previously
    guessShouldNotCount: function(guess) {
      //guess should count if its not an old guess
      let guessIsNotOld = this.lettersGuessed.indexOf(guess) === -1;
      //guess should count if its a letter
      let guessIsLetter = this.ALPHABET.indexOf(guess) !== -1;
      return !(guessIsNotOld && guessIsLetter)
    },

    letterIsInCurrentWord: function(letter) {
      return this.currentWord.indexOf(letter) !== -1
    },

    letterIsInGuessedLetters: function(letter) {
      return this.lettersGuessed.indexOf(letter) !== -1
    },

    //how to tell if the user won the game? naive way would be to reduce the selected
    //word by checking it... 
    userWonGame: function() {
      //iterate through the letters in the current word. If they all satisfy the 
      //guess is correct condition, then we're set. 
      return this.currentWord.split('').every(this.letterIsInGuessedLetters.bind(this))
    },

    updateInternalState: function(guess, incorrectGuess=false) {
      this.lettersGuessed.push(guess);
      if (incorrectGuess) {
        this.incorrectGuesses += 1;
      }
    },

    updateApples: function() {
      $('#apples').attr('class', `guess_${this.incorrectGuesses}`);
    },

    updateGuessElement: function(guess) {
      let $newSpan = this.createSpan(guess);
      $('#guesses').append($newSpan);
    },

    updateWordElement: function(guess) { 
      //get the span elements that represent our letters 
      let $spans = $('#spaces span');

      //get the indicies where our guess is located in the current word
      let indicies = this.getIndiciesOfGuessedLetter(guess);
      //for each index, change its corresponding span to contain the letter
      indicies.forEach(function(letterIndex) {
        $spans.eq(letterIndex).text(guess)
      })
    },

    createSpan: function(guess) {return $(`<span>${guess}</span>`)},


    displayWinnerState: function() {
      this.setMessage("Congrats, you have won!!!");
      this.displayPlayAgain();
    },

    displayLoserState: function() {
      this.setMessage("You are out of guesses");
      this.displayPlayAgain();
    },

    displayPlayAgain: function() {
      $('a#play_again').removeClass('hidden');
    },

    setMessage: function(message) {
      $("p#message").text(message);
    },

    getIndiciesOfGuessedLetter(guess) {
      let indicies = [];
      for (let i = 0; i < this.currentWord.length; i += 1) {
        let letter = this.currentWord[i];
        if (letter === guess) {
          indicies.push(i)
        }
      }
      return indicies
    }

  }
})();


//start the game when the page has loaded
$(function() {
  game.start();

  //when the user clicks the play again link, reset and start the game ofer
  $('a#play_again').on('click', function(event) {
    event.preventDefault();
    game.reset();
    game.start();
  }); 

  //handle the user's keystrokes
  $(document).on('keyup', function(event) {
    game.processKeystroke(event);
  })
})

/*
  What did I do?
    create a game object that has game running functionality. It tracks
    the state of the game, and has helper methods to process the user's 
    actions and change the webpage accordingly.

    When the dom loads, I initialize the game via a helper method. When
    the user plays again, I have a method to reset the game state. 

    Finally, method on the game object processes the user actions 
    with each keystroke event/


  What did LS do?
    First, they get a whole bunch of DOM elements once the DOm is loaded.
    Everything is defined in the dom load event listener, so everything
    has access to these dom elements

    Their random word function returns its own function so that the 
    array of random words is only visible in the returned function's 
    closure

    They define Game as a function, and assign it pwoperties to track
    state.

    They define the behaviors of the game as methods on the Game function's
    prototype object. 

    They unbind the keypress event when the user wins / loses. Then they
    re-create it whenever a new game object is created. 

    Other than that, the mechanics of our solutions are pretty similar. 
*/