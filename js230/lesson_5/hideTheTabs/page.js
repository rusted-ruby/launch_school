$(function() {
  $('article').hide();
  //wow: looks like you need to have this function definition syntax
  //in order for 'this' to be considered the event target. If you
  //do an arrow function, then its like defining the function in an
  //outer scope and 'this' is the document.
  //might be better to just get into the habit of using 'event.target'
  //rather than 'this' if 'this' comes with caveats like that.
  $('a').on('click', function(event) {
    event.preventDefault();
    $('article').hide().filter('[data-block=' + $(this).attr('data-block') + ']').show();
  })
})