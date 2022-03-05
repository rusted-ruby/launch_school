/*we want a long boolean check to help us decide what museum to visit. Here are the criteria
 > we're up for any museum about science or computers
 > no modern art museums, unless its warhol or in amsterdam
 > we'll skip all other museums. 
first one returns true if museum includes computer or science. that's all good
what about the second one. !(modern && art && warhol || amsterdam)
well, that shuts us off to any warhol and art museums. This will work for the science and 
computer museums, but we'll miss out on any warhols and amsterdam museums
*/

function wantToVisit(museum, city) {

  let science = (museum.includes('Computer') || museum.includes('Science'));
  let artConditions = (museum.includes('Andy Warhol') || city === 'Amsterdam');
  let art = museum.includes('Art') && artConditions;
  return science || art
}

// Tests (should all print 'true')

console.log(wantToVisit('Computer Games Museum', 'Berlin') === true);
console.log(wantToVisit('National Museum of Nature and Science', 'Tokyo') === true);
console.log(wantToVisit('Museum of Modern Art', 'New York') === false);
console.log(wantToVisit('El Paso Museum of Archaeology', 'El Paso') === false);
console.log(wantToVisit('NEMO Science Museum', 'Amsterdam') === true); //prob
console.log(wantToVisit('National Museum of Modern Art', 'Paris') === false);
console.log(wantToVisit('Andy Warhol Museum of Modern Art', 'Medzilaborce') === true);//prob
console.log(wantToVisit('Moco: Modern Contemporary Art', 'Amsterdam') === true);//prob
console.log(wantToVisit('Van Gogh Museum', 'Amsterdam') === false);
console.log(wantToVisit('Andy Warhol Museum', 'Melbourne') === false);