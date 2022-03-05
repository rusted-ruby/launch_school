//why are the warnings here displayed twice?
//its because we're not re-setting the value of newSpecies after we print the message


//this happens because we declare newSpecies with var, which hoists the declaration out
//of the block to the top of the global scope. Therefore, the variable isn't re-declared
//with each iteration of the loop like we expect. A better fix would be to just declare 
//newSpecies with let instead of var

const species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
const isMidnight = true;
const isFullmoon = true;

function isTransformable(species) {
  return species[0] === 'w';
}

function transform(species) {
  return `were${species}`;
}

for (let index = 0; index < species.length; index++) {
  const thisSpecies = species[index];
  let newSpecies;

  if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
    newSpecies = transform(thisSpecies);
  }

  if (newSpecies) {
    console.log(`Beware of the ${newSpecies}!`);
  }
}