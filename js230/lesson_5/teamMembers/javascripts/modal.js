/*
  What needs to happen here? Need to create a modal for the team page
  of space design. So when you click on a team member's picture, a 
  little window with some more information about them appears. 

  Best way to do this is likely to create a single modal template, 
  and dynamically populate it with team member data... could be 
  pretty easy to do with handlebars... or with html data attributes.

  How could this work with html data attributes? Well, you could do 
  something like
    dynamically build the modals for each user and hide them all
    activate the modals whenever we click on an li that has the
    given data attribute...

  Okay, I'm stuck. How do we do this?
    looks like LS did this by creating two new html elements: a modal
    and a modal layer. the modal is where all the info lives. When we
    create it, it is empty and has a class of 'hidden' so its hidden.
    The modal layer is the area around the modal. Think of it as the 
    border around the modal that's displayed.

    There's also some CSS code that's written to format the modal. 
    I'm going to gloss over that for now. I'll take what they've done
    with the html and css and see if I can make js for it. 

  so... what does this js need to be able to do?
    When we click on a given user, populate the modal and modal layer with the
    appropriate info, then display them. the info will live in the data attributes 
    of the anchor elements, so we can obtain it from there. 
    
    Once the modal layer is displayed, we'll need to attach an event listener to it that 
    clears and hides it if the user clicks the modal layer or the x in the window.

*/

$(function() {
  //create an event listener for if a user clicks on an anchor inside the team div
  $('div#team a').click(function(event) {
    event.preventDefault();

    let $a = $(this)
    let name = $a.attr('data-name');
    let image = $a.attr('data-image');
    let text = $a.attr('data-text');

    //set the appropriate values on the modal and display it 
    let $modal = $('#modal');
    let $img = $modal.find('img')
    $img.attr('src', image);
    $img.attr('alt', name);
    $modal.find('h3').text(name);
    $modal.find('p').text(text);
    $modal.removeClass('hide').addClass('show');
    let $modalLayer = $('#modal-layer');
    $modalLayer.removeClass('hide').addClass('show');

  });

  //create an event listener that will close the modal if its displayed
  $('#modal a').click(function(event) {
    event.preventDefault();
    console.log('click the close button');

    //This isn't working... do I need to do more than change the class? Do I need
    //to actually undo all the changes I made above, like clear all the attributes 
    //and everything? I doubt it... there must be something I'm missing
    let $modal = $('#modal');
    let $img = $modal.find('img');
    $img.attr('src', '');
    $img.attr('alt', '');
    $modal.find('h3').text('');
    $modal.find('p').text('');
    $modal.removeClass('show').addClass('hide');
    $('#modal-layer').removeClass('show').addClass('hide');
  })
})

/*
  Ok, I give up... what did LS do?
  Yeah, looks like when they hide the modal they set all the data fields
  to nothing
*/