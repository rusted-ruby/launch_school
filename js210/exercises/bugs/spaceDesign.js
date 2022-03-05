// Roles (salary still to be determined)
//we've got our ceo and scrum master, but they're displaying undefined... why?
//its because something weird happens when we use an object as the name of a property.
//it just gets turned into [object Object] rather than each individual name. So team 
//is one object with one entry that's reassigned three times. the last one just happens to 
//be undefined.

const ceo = {
  tasks: ['company strategy', 'resource allocation', 'performance monitoring'],
  salary: 0,
};

const developer = {
  tasks: ['turn product vision into code'],
  salary: 0,
};

const scrumMaster = {
  tasks: ['organize scrum process', 'manage scrum teams'],
  salary: 0,
};

// Team -- we're hiring!

const team = {};
team.ceo = 'Kim';
team.scrumMaster = 'Alice';
team.developer = undefined;


const company = {
  name: 'Space Design',
  team,
  projectedRevenue: 500000,
};

console.log(`----{ ${company.name} }----`);
console.log(`CEO: ${company.team.ceo}`);
console.log(`Scrum master: ${company.team.scrumMaster}`);
console.log(`Projected revenue: $${company.projectedRevenue}`);

// ----{ Space Design }----
// CEO: undefined
// Scrum master: undefined
// Projected revenue: $500000