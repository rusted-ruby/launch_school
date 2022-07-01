/*
  Need to create a photo gallery. How is this going to work?
  There will be a large image, then a slideshow of other images under
  it. The one that's clicked will have a class that will do a few things
    Have a visual indication that its the one selected
    Be displayed as the larger image.
  As we click on other images in the slideshow, we'll take the class
  off of the currently displayed image and move it to the one we 
  clicked on so it displays properly. 

  This one won't be SO bad...
    create an click listener on the list items in our unordered list
    find the li with an active class and remove it. 
    put the active class on the li we clicked on 
    change the src of the big image to the image we clicked on

  The hard part is going to configuring the visual indicator on the
  active class, but I'll come back to that part later... looks like
  I'll finally need to figure out how to use css.
*/

$(function() {
  //create a click event listener for the lis in the picture ul
  $('ul li').click(function(event) {
    event.preventDefault();

    //don't do anything if the user clicks on the active photo
    if ($(this).hasClass('active')) {
      return;
    }

    //clear the class on the active photo
    let $oldActivePhoto = $('img.active');
    $oldActivePhoto.removeClass('active');

    //add the active class to the clicked photo
    let $newActivePhoto = $(this).find('img');
    $newActivePhoto.addClass('active');

    //change the display image to the active photo.
    let $displayedImg = $('figure img');
    $displayedImg.attr('src', $newActivePhoto.attr('src'));
  })
})