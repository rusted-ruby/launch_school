/*
build a simple inventory mgmt system with an item creator, item manager and report manager. 
  item creator makes sure that all info for an item is present and valid
  item manager is used to create, delete and query info about items. 
  report manager creates reports for a specific item of ALL items. 

required info for an item object (one property per piece of info)
  SKU code: unique ID of item. need to account for odd things here, but not duplicates
  item name: min of 5 non-space chars
  category: min of 5 chars and only one word
  quantity: must be populated. Can assume you'll get something
  If anything is invalid, return {notValid: true}

methods for item manager
  create
  update
  delete
  items (list of all items)
  in stock (items with a quantity greater than 0)
  itemsInCategory: lists items with a given cat

methods for report manager
  init: accepts an item manager object and assigns it to the items prop
  createReporter: accepts an SKU code and returns an object
  reportInStock: logs all items in stock to the console.


Let's start with the item manager: this is just an object with a few methods. Not sure how 
the ItemCreator fits into this though... Maybe that's just an object that has the name 
validation code in it?
*/
let ItemCreator = {
  //name should have at least 5 non space chars
  nameIsValid(name){
    let nameTest = name.replaceAll(' ', "");
    return nameTest.length >= 5
  },
  //cat should have at least 5 chars and no spaces
  catIsValid(cat){
    return cat.length >= 5 && !cat.includes(' ')
  },
  quantityIsValid(quantity){
    return quantity !== undefined
  },
  getCode(name, cat){
    let nameNoSpaces = name.replaceAll(' ', '');
    return (nameNoSpaces.slice(0, 3) + cat.slice(0, 2)).toUpperCase()
  },
  createItemObj(name, cat, quantity){
    return{
      name,
      category: cat,
      quantity,
      skuCode: this.getCode(name, cat)
    }
  },
  getItemObj(name, cat, quantity){
    if(this.nameIsValid(name) && this.catIsValid(cat) && this.quantityIsValid(quantity)) {
      return this.createItemObj(name, cat, quantity)
    } else {
      return {notValid: true}
    }
  },
}

let ItemManager = {
  items: [],
  create(name, cat, quantity){
    let item = ItemCreator.getItemObj(name, cat, quantity);
    //if the item is valid, track it. else, do nothing
    if (!item.notValid){
      this.items.push(item)
    }
  },
  update(code, object){
    let itemsToUpdate = this.items.filter((item) => {
      return item.skuCode === code
    });

    //for each item, iterate through the properties of the object passed in and reassign
    //the values
    itemsToUpdate.forEach((item) => {
      for (let [prop, value] of Object.entries(object)) {
        item[prop] = value
      }
    })
  }, 
  delete(code){
    this.items = this.items.filter((item) => {
      return item.skuCode !== code
    })
  },
  inStock(){
    this.items.forEach((item) => {
      if (item.quantity > 0) {
        console.log(item)
      }
    })
  },
  itemsInCategory(cat){
    this.items.forEach((item) => {
      if (item.category === cat) {
        console.log(item)
      }
    })
  },
}

let ReportManager = {
  init(itemManager){
    this.itemManager = itemManager;
  },
  reportInStock(){
    let str = ""
    this.itemManager.items.forEach((item) =>{
      if (item.quantity > 0){
        str += `${item.name}, `
      }
    })
    str = str.slice(0, str.length - 2)
    console.log(str)
  },
  createReporter(code){
    let item = this.itemManager.items.find((item) => {
      return item.skuCode === code
    })
    return {
      itemInfo(){
        for (let [prop, value] of Object.entries(item)) {
          console.log(`${prop}: ${value}`)
        }
      }
    }
  }

}

//test code
ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

console.log(ItemManager.items);
// returns list with the 4 valid items

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
ItemManager.inStock();
// returns list with the item objects for football and kitchen pot


ReportManager.reportInStock();
// logs football,kitchen pot
ItemManager.itemsInCategory('sports');
// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
console.log(ItemManager.items);
// returns list with the remaining 3 valid items (soccer ball is removed from the list)

const kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10

/*
alright, my code passes the tests! Let's see what LS did differently. 
Their itemCreator is an IIFE that defines the validation functions and sku code generator as
private functions, then returns a creation function that has the private functions in its closure

Item manager is a static item though. It uses a new instance of ItemCreator (NOTE THE USE OF new)
to create a new item. 

Report manager is also a static item. 
*/