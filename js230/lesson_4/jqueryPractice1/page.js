//run this script when the DOM is ready
$(function() {
  //listen for a form submit event
  $('form').submit(function(event) {
    event.preventDefault();
    //get the key that will toggle the accordion
    let newKey = $('#key').val();

    //attach a keypress event to the document to toggle the accordion
    //going forward. we use the off method to 'turn off' any previous
    //keypress event listeners attached to the document
    $(document).off('keypress').on('keypress', function(event) {
      //toggle the accordion if we pressed our key. 
      if (event.key !== newKey) {
        return;
      }

      //trigger a click event on the anchor element. This will activate
      //the event listener defined below and toggle the accordion
      $('a').trigger('click');
    });

    //bind a click event to the anchor. 
    $('a').click(function(event) {
      event.preventDefault();
      console.log('click');
      //display or hide the accordion element with a sliding motion
      $('#accordion').slideToggle();
    });
  });
})