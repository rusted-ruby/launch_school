//reimplement the todo list maker so that it gives you an object not a function
//note that we don't use "this" within our object methods to keep the entries private

function makeList() {
  let entries = [];
  return {
    list(){
      if (entries.length === 0 ){
        console.log("The list is empty!");
      } else {
      entries.forEach((ele) => console.log(ele))
      }
    },
    add(entry){
      if (entries.indexOf(entry) === -1) {
        entries.push(entry);
        console.log(`${entry} added!`);
      }
    },
    remove(entry){
      let idx = entries.indexOf(entry)
      if (idx !== -1) {
        entries.splice(idx,1);
        console.log(`${entry} deleted!`);
      }
    }
  };
}

let list = makeList();
list.add('peas')
list.list()
list.add('corn')
list.list()
list.remove('peas')
list.list()
console.log(list.entries)