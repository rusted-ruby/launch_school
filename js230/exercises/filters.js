/*
  edit the contents of a form in turn with the classification selection. 

  What's the best way to do this? hard code all the possible combinations
  as js objects? then clear the options and use the objects to repopulate?

  so objects: {vertebrate: []}
  I mean, that would work for this simple example, but it feels naive..
  what if we wanted to add more classifications or animals? 

*/

const classToAnimal = {
  "Vertebrate": ["Bear", 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
  'Warm-blooded': ['Bear', 'Whale', 'Ostrich'],
  'Cold-blooded': ['Salmon', 'Turtle'],
  'Mammal': ['Bear', 'Whale'],
  'Bird': ['Ostrich'],
};
const allClasses = Object.keys(classToAnimal);

const animalToClass = {
  'Bear': ['Vertebrate', 'Warm-blooded', 'Mammal'],
  'Turtle': ['Vertebrate', 'Cold-blooded'],
  'Whale': ['Vertebrate', 'Warm-blooded', 'Mammal'],
  'Salmon': ['Vertebrate', 'Cold-blooded'],
  'Ostrich': ['Vertebrate', 'Warm-blooded', 'Bird'],
}
const allAnimals = Object.keys(animalToClass);

document.addEventListener('DOMContentLoaded', function(event) { 
  classSelect = document.querySelector('#animal-classifications');
  animalSelect = document.querySelector('#animals');

  classSelect.addEventListener('change', function(event) {
    event.preventDefault;
    switchOutSelectors(this.value, classToAnimal, animalSelect);
  });
  animalSelect.addEventListener('change', function(event) {
    event.preventDefault
    switchOutSelectors(this.value, animalToClass, classSelect);
  });

  //impl clear button
  document.querySelector('button#clear').addEventListener('click', function(event) {
    event.preventDefault();
    
    //add new options to the animal selector
    removeSelectorOptions(animalSelect);
    animalSelect.insertAdjacentHTML(
      'beforeend',
      `<option value="Animal" selected>Animals</option>`
    );
    addNewOptions(
      Object.keys(animalToClass),
      animalSelect,
    );

    //add new options to the class selector
    removeSelectorOptions(classSelect);
    classSelect.insertAdjacentHTML(
      'beforeend',
      `<option value="Classification" selected>Classifications</option>`
    );
    addNewOptions(
      Object.keys(classToAnimal),
      classSelect
    )
  });
});

function switchOutSelectors(userValue, dictionary, selectorToChange) {
  removeSelectorOptions(selectorToChange);
  let newOptions = dictionary[userValue];
  addNewOptions(newOptions, selectorToChange);
}

function addNewOptions(newOptions, selectorToChange) {
  newOptions.forEach((option) => {
    selectorToChange.insertAdjacentHTML(
      'beforeend',
      `<option value="${option}">${option}</option>`
    );
  })
}

function removeSelectorOptions(selectorEle) {
  // let options = selectorEle.children;
  // let stopPoint = options.length;

  // //clear out the option elements one by one. 
  // for (let i = 0; i < stopPoint; i += 1) {
  //   let option = options[0];
  //   option.remove();
  // }
  selectorEle.length = 0
}

/*
  This is looking pretty good! What did LS do?

  Okay, so they tracked the options the same way that I did... that's good
  news at least. 

  Looks like clearing the options is a lot less complicated than I made 
  it out to be. If you pass it the selector element, you can just set 
  its length to zero?
*/