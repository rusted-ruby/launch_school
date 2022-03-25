//implement a simple todo list function

function makeList() {
  let list = {};
  return function(item) {
    //if the list is empty and we don't pass in anything
    if (Object.keys(list).length === 0 && !item) {
      console.log("the list is empty");
    //if no arguments provided, list out the existing list contents
    } else if (!item) {
      Object.keys(list).forEach((ele) => console.log(ele))
    //if the provided argument is NOT in the list, add it
    } else if (!list[item]) {
      list[item] = 1;
      console.log(`${item} added!`);
    } else if (list[item]) {
      delete list[item]
      console.log(`${item} removed!`)
    }
  }
}

let list = makeList();
list();
list("make breakfast");
list("read book");
list();
list("make breakfast");
list();