//build a sentiment analyzer. look at the words in text and figure out a count of pos 
//ones and neg ones. 

//split up the text into an array of words with a regex. Then iterate through the words to 
//see which ones are positive and neg. We can push the pos words to a pos array and the neg
//words to a neg array. Then use their lengths to compute what we want

let positiveWords = ['fortune', 'dream', 'love', 'respect', 'patience', 'devout', 'noble', 'resolution'];
let negativeWords = ['die', 'heartache', 'death', 'despise', 'scorn', 'weary', 'trouble', 'oppress'];

function sentiment(text) {
  let regex = /\W+/
  let arr = text.split(regex);
  //console.log(arr)
  let posWords = []
  let negWords = []
  arr.forEach((element) => {
    if (positiveWords.includes(element)) {
      posWords.push(element)
    } else if (negativeWords.includes(element)) {
      negWords.push(element)
    }
  })
  console.log(`There are ${posWords.length} positive words in the text`);
  console.log(`Positive sentiments: ${posWords}`);
  console.log()
  console.log(`There are ${negWords.length} negative words in the text`);
  console.log(`Negative sentiments: ${negWords}`);
  console.log()
  let sentiment = posWords.length > negWords.length ? 'Positive' : 'Negative'
  console.log('The sentiment of the text is ' + sentiment);
}

//what did LS do?
//they changed the text to lowercase, then used a match function with the regex to get the word
//list. Then they used filter on the word list to get an array of pos and neg words by
//comparing each word against the indexOf function. 


// console output
/*

There are 5 positive words in the text.
Positive sentiments: fortune, dream, respect, love, resolution

There are 6 negative words in the text.
Negative sentiments: die, heartache, die, death, weary, death

The sentiment of the text is Negative.
*/

let textExcerpt = 'To be or not to be-that is the question:\n' +
  'Whether \'tis nobler in the mind to suffer\n' +
  'The slings and arrows of outrageous fortune,\n' +
  'Or to take arms against a sea of troubles,\n' +
  'And, by opposing, end them. To die, to sleep-\n' +
  'No more-and by a sleep to say we end\n' +
  'The heartache and the thousand natural shocks\n' +
  'That flesh is heir to-\'tis a consummation\n' +
  'Devoutly to be wished. To die, to sleep-\n' +
  'To sleep, perchance to dream. Aye, there\'s the rub,\n' +
  'For in that sleep of death what dreams may come,\n' +
  'When we have shuffled off this mortal coil,\n' +
  'Must give us pause. There\'s the respect\n' +
  'That makes calamity of so long life.\n' +
  'For who would bear the whips and scorns of time,\n' +
  'Th\' oppressor\'s wrong, the proud man\'s contumely, [F: poor]\n' +
  'The pangs of despised love, the law’s delay, [F: disprized]\n' +
  'The insolence of office, and the spurns\n' +
  'That patient merit of the unworthy takes,\n' +
  'When he himself might his quietus make\n' +
  'With a bare bodkin? Who would fardels bear, [F: these Fardels]\n' +
  'To grunt and sweat under a weary life,\n' +
  'But that the dread of something after death,\n' +
  'The undiscovered country from whose bourn\n' +
  'No traveler returns, puzzles the will\n' +
  'And makes us rather bear those ills we have\n' +
  'Than fly to others that we know not of?\n' +
  'Thus conscience does make cowards of us all,\n' +
  'And thus the native hue of resolution\n' +
  'Is sicklied o\'er with the pale cast of thought,\n' +
  'And enterprises of great pitch and moment, [F: pith]\n' +
  'With this regard their currents turn awry, [F: away]\n' +
  'And lose the name of action.-Soft you now,\n' +
  'The fair Ophelia.-Nymph, in thy orisons\n' +
  'Be all my sins remembered';

  sentiment(textExcerpt);