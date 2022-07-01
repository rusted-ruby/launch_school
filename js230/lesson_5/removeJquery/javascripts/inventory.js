/*
  What to do here? Need to remove jquery from this codebase and replace
  it with regular js browser apis. Also need to incorporate a 
  handlebars template. 

  First, let's take a look at this code to get a good understanding 
  of what its doing.

  Looking pretty good at clearing out the jquery things! Now let's add
  some handlebars functionality when creating a new template. 
*/

var inventory;

//don't do anything until the dom is ready
(function() {
  //create a handlebars templater function

  //create an inventory object
  inventory = {
    lastId: 0,
    collection: [],

    //get the current date and set it as the text for #order_date
    setDate: function() {
      var date = new Date();
      document.querySelector('#order_date').textContent = date.toUTCString();
      //$("#order_date").text(date.toUTCString());
    },

    //take the dom element that previously stored our inventory and
    //save it to the object for later use. 
    //won't need this anymore now that we're using handlebars
    // cacheTemplate: function() {
    //   //var $iTmpl = $("#inventory_item").remove();
    //   //this.template = $iTmpl.html();
    //   //textContent property returns the html string of the inventory
    //   //item element, and is equivalent to calling .html() on a jquery obj
    //   let iTmpl = document.querySelector('#inventory_item').textContent;
    //   this.template = iTmpl;
    // },

    //add an item to the internal cache
    add: function() {
      this.lastId++;
      var item = {
        id: this.lastId,
        name: "",
        stock_number: "",
        quantity: 1
      };
      this.collection.push(item);

      return item;
    },

    //use a filter function to remove an item from the internal cache.
    //seems like there's a bug here though... how do we get the idx?
    remove: function(idx) {
      this.collection = this.collection.filter(function(item) {
        return item.id !== idx;
      });
    },

    //find the internal cache of the item we want. 
    get: function(id) {
      var found_item;

      this.collection.forEach(function(item) {
        if (item.id === id) {
          found_item = item;
          return false;
        }
      });

      return found_item;
    },

    //update the item in our internal cahce
    update: function(parent) {
      var id = this.findID(parent),
          item = this.get(id);

      
      item.name = parent.querySelector("[name^=item_name]").value;
      item.stock_number = parent.querySelector("[name^=item_stock_number]").value;
      item.quantity = parent.querySelector("[name^=item_quantity]").value;
    },

    newItem: function(e) {
      e.preventDefault();
      //add an item to the internal cache
      var item = this.add();
          //create a new jquery object with the cached template
          //but replace each instance of ID with the new item's ID
          //itemHtmlString = this.template.replace(/ID/g, item.id);
      var itemHtmlString = this.createTemplate({id: item.id})

      //append the new HTML string for the item to the inventory tbl
      //$("#inventory").append($item);

      //find the element with an id of inventory. Insert the html
      //string for our new element as the last child
      document.querySelector('#inventory').insertAdjacentHTML(
        'beforeend',
        itemHtmlString
      );
    },

    //return a jquery object of the closest tr to the event
    findParent: function(e) {
      //return $(e.target).closest("tr");
      //a to td to tr
      return e.target.parentNode.parentNode
    },

    //given a jquery item, find the id based on the hidden input field
    findID: function(parent) {
      return +parent.querySelector('input[type=hidden]').value;
      //return +$item.find("input[type=hidden]").val();
    },

    //need to make sure this is an anchor element with a delete class
    isNotDeleteButton: function(e) {
      return !(
        e.target.classList.contains('delete') 
        && 
        e.target instanceof HTMLAnchorElement
      );
    },

    //delete an item from the list of inventory products. 
    deleteItem: function(e) {
      e.preventDefault();
      //only do this for delete button
      if (this.isNotDeleteButton(e)) {
        return;
      }

      //find the tr parent of the delete buton
      let parent = this.findParent(e)

      //get the id of the product we're removing and use it to remove
      //the product from the internal cahce
      this.remove(this.findID(parent))
      
      //find the tr parent of the delete button and remove it from the dom.
      parent.remove();
    },

    updateItem: function(e) {
      //only run this for html input elements
      if (!e.target instanceof HTMLInputElement) {
        return;
      }

      var parent = this.findParent(e);

      this.update(parent);
    },

    //add some event listeners to certain dom elements. bind the 
    //callbacks to the inventory object
    bindEvents: function() {
      //what is the context here? is this the inventory object?
      //or will it be the dom element returned by the query selector?
        //looks like its the inventory object, which is what we want
        //whoops, I'm wrong: its the inventory object in the bindEvents
        //function, but its the dom element the user interacts with when
        //we actually invoke the callback... so we do need bind here

      //$("#add_item").on("click", $.proxy(this.newItem, this));
      document.querySelector('#add_item').addEventListener(
        'click',
        this.newItem.bind(this), //just save the fn as a callback: don't invoke it yet
      );

      //These ones are tricky: jQuery has the second param of 'on' that
      //alows you to do dynamic filtering of events. So you attach the 
      //listener to the inventory element, but don't do anything unless
      //the event target is 'a.delete' or ':input'. So I can either
        //include a condition in the callbacks that does nothing unless
          //event target is what we want
        //dynamically attach the event listeners to the proper event 
          //targets as the inventory table elements are created
      //I feel like including a condition in the callback is the better
      //way to go.

      //$("#inventory").on("click", "a.delete", $.proxy(this.deleteItem, this));
      document.querySelector('#inventory').addEventListener(
        'click',
        this.deleteItem.bind(this),
      );


      //$("#inventory").on("blur", ":input", $.proxy(this.updateItem, this));
      //need true here because the blur event does not bubble. need to make
      //sure this can fire during the capture phase.
      document.querySelector('#inventory').addEventListener(
        'blur',
        this.updateItem.bind(this),
        true
      );
    },

    //init the object. call three functions to set properties
    init: function(templater) {
      this.setDate();
      //this.cacheTemplate();
      this.bindEvents();
      this.createTemplate = templater
    }
  };
})();

//init the inventory object. need to figure out what proxy does
//proxy sets the context of the first param to the second param. so
//this is saying that the context of inventory.init will always be
//inventory... seems kind of redundant though, don't you think?

//Looks like you need to specify the inventory object because you
//lose context if you pass a function in as an argument to another fn?
//anyway, you can do this same thing by just calling inventory.init()
//afterthe dom is fully loaded

//$($.proxy(inventory.init, inventory));

document.addEventListener('DOMContentLoaded', function() {
  let templater = Handlebars.compile(document.querySelector('#inventory_item').textContent);
  inventory.init(templater);
});

/*
  Things to keep an eye on with the solution
    See how they handle the additional event filters that 
      jquery had: ie, the a.delete and :input selectors
    Yeah, they pretty much did the same thing I did. 

    See how they got the tr parent node given the anchor... There's
      gotta be a more graceful way to do it than what I did. 
    lol, looks like you can still use the closest method with regular node objects!
    I'd thought that was specific to jqeury, guess I was wrong.

    How to create an html element given an html string. 
      There are actually some methods for this I found, so no harm there.
*/
