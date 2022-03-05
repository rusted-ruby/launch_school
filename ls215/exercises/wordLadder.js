/*
spot the bug!
*/

//need parenthses around the word parameter of for each... huh, that's not it
//its SEMICOLONS! the lack of a semicolon on the ladder initialization makes the first line
//become let ladder = ''['head', ...].forEach(), which obv causes problems
//well, it looks like forgetting semicolons actually CAN do something.

let ladder = '';

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-';
  }

  ladder += word;
})

console.log(ladder);  // expect: head-heal-teal-tell-tall-tail