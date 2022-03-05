//implement a factory function to build country objects

function makeCountry(name, continent, visited = false) {
  return {
    name,
    continent,
    getDescription() {
      let visitedStr;
      if (this.visited) {
        visitedStr = `I have visted ${this.name}`;
      } else {
        visitedStr = `I haven't visted ${this.name}`;
      }
      console.log(`${this.name} is located in ${this.continent}. ${visitedStr}`);
    },
    visited,
    visitCountry() {
      this.visited = true;
    },
  }
}

let chile = makeCountry('The Republic of Chile', 'South America');
let canada = makeCountry('Canada', 'North America');
let southAfrica = makeCountry('The Republic of South Africa', 'Africa');

chile.getDescription();       // "The Republic of Chile is located in South America."
canada.getDescription();      // "Canada is located in North America."
southAfrica.getDescription(); // "The Republic of South Africa is located in Africa."
canada.visitCountry();
canada.getDescription()