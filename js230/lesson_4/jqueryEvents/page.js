console.log('in the script');

//run this callback once the dom has loaded
$(function () {
  let $p = $('p').eq(0);
  let OUTPUT = 'Your favorite fruit is '
  //run this second callback when we click an anchor element
  $("a").on('click', function(event) {
    console.log('click');
    event.preventDefault();

    //note: you can also use 'this' to access the anchor element
    //that was clicked. 
    let $a = $(event.target);
    $p.text(OUTPUT + $a.text());
  })

  //run this callback when we submit our form
  $('form').on('submit', function(event) {
    console.log('submit');
    event.preventDefault(); //don't actually submit this.

    //get the text that the user inputted
    let $input = $(this).find('input[type=text]');

    //use the val method for forms
    $p.text(OUTPUT + $input.val())
  })
})