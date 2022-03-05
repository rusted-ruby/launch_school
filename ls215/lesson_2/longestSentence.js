//find the sentence that has the most words in a block of text. 
//sentences can end with . ? or !
//sentences always begin with a word character. a word is any sequence of chars that aren't
//spaces or sentence ending chars
//log the longest sentence and its word count to the console. 

function longestSentence(text) {
  //split text into an array of sentences
  let regex = /[.?!]+ /
  let sentenceArr = text.split(regex)

  //find the longest sentence
  let longest = ''
  sentenceArr.reduce((lastVal, currentVal) => {
    let lastValWords = lastVal.split(' ');
    let currentValWords = currentVal.split(' ')
    if (lastValWords.length < currentValWords.length) {
      longest = currentVal;
    }
    return longest
  }, longest)

  //count the words in the longest sentence
  let wordCount = longest.split(' ').length;
  console.log(longest);
  console.log();
  console.log(`The longest sentence has ${wordCount} words`);
}

let longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';


longestSentence(longText);

// console output
/*
It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.

The longest sentence has 86 words.
*/


// Assuming the last sentence is removed:

longestSentence(longText);

// console output
/*
Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.

The longest sentence has 30 words.

How did LS do this? They have a regex that they use with match to create an array of sentences
then they use the same strategy I did to get the longest sentence. 

What regex did they use though?
/\w[^.?!]*?[.!?]/g
0 or more occurances of a word char and not .?! (lazy matching => only look at the first one in a given string)
then one instance of . or ? or !
*/