//we got some code that runs in sloppy mode here. Fix it so it runs in strict mode. 

//first, what is this code doing? 

//second, what are the problems I see in strict mode

//strict problem: no variable declaration

"use strict"

const SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];
const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9",
         "10", "Jack", "Queen", "King", "Ace"];

function createDeck() {
  //function creates a deck. the deck is an array of strings. the strings have a suit and a rank
  //so 2 of diamonds, king of hearts, etc.

  //is function definition within another function allowed in strict mode? Yes, but not the
  //arrow function syntax we were using
  //this.SUITS is also not allowed... not sure what 'this' is yet, but it was an easy fix
  function allCards() {
    return SUITS.reduce((deck, suit) => {
      RANKS.forEach(rank => deck.push(`${rank} of ${suit}`));
      return deck;
    }, []);
  };

  //invoke the all cards function to create the deck array.
  //strict problem: deck wasn't declared
  let deck = allCards();

  //call shuffle on the deck array
  //potential problem: implicit mutation of the deck variable. 
  shuffle(deck);

  return deck;
}

//shuffle the deck 400 times
function shuffle(deck) {
  //can't have numbers that start with 0 in strict mode
  //also, counter was not declared
  for (let counter = 0; counter < 400; counter += 1) {
    let randomIndex1 = randomCardIndex(deck.length);
    let randomIndex2 = randomCardIndex(deck.length);
    let tempCard = deck[randomIndex1];
    deck[randomIndex1] = deck[randomIndex2];
    deck[randomIndex2] = tempCard;
  }

  //are function definitions within another function allowed in strict mode. 
  function randomCardIndex(deckLen) {
    return Math.floor(Math.random() * deckLen);
  }
}

console.log(createDeck());