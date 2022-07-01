/*
  What needs to happen here? 
    listen for a submit event
    parse the inputs from the submit event
    concatenate the inputs into a new item
    add the string as a new list item to the list

  Also need to do some stuff with the print preview, but we'll get there
  when we get there. 
*/

$(function() {
  let $list = $('ul#grocery-list');
  let $nameField = $('input[name=name]');
  let $quantityField = $('input#quantity');
  let $form = $('form');

  $form.submit(function(event) {
    event.preventDefault();
    let name = $nameField.val();
    let quantity = getQuantity($quantityField);
    
    //use jquery to create a new list item dom element and append it to the ul
    let $li = $(`<li>${quantity + ' ' + name}</li>`);

    $li.appendTo($list);

    //clear the form element
    event.currentTarget.reset();
  });
})

function getQuantity($quantityField) {
  let quantity = parseInt($quantityField.val(), 10);

  if (Number.isNaN(quantity)) {
    quantity = 1;
  }

  return String(quantity)
}