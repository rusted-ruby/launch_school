/*
  This is going to contain the code that will handle user interactions, and issue ajax
  requests when needed

  First, we'll make a call to the server to fetch the photo info.
    path: /photos
    HTTP GET
    returns an array of photo data.
  Next, we'll pass that information to a handlebars template and stick it on the page. 
    photos template goes in the slides div
    photo information template is put in a header, but only for the first photo. 

  Now, we're looking at the slideshow functionality... I'll need some way of knowing
  what the current photo is, as well as how to display it... maybe a new class?

  Now we're looking at like and comment functionalirt. 
*/

const URL =  'http://localhost:3000';
let allPhotos = [];
let templates = {};



//load the images + info for first image once the dom is loaded
$(function() {
  //register the handlebars templates / partials
  Handlebars.registerPartial('photo_comment', $('#photo_comment').html());
  templates = {
    photo_comment: Handlebars.compile($('#photo_comments').html()),
    photos: Handlebars.compile($('#photos').html()),
    photo_information: Handlebars.compile($('#photo_information').html())
  };

  //render the photos
  $.getJSON(URL + '/photos', function(photoArr) {
    allPhotos = photoArr;
    //render all photos on the page
    $('div#slides').append(templates.photos({photos: photoArr}));

    //display info and comments for the first photo
    let firstPhoto = photoArr[0];
    renderPhotoInfoAndComments(firstPhoto.id);

    //mark the first photo as active
    $(`figure[data-id=${firstPhoto.id}]`).toggleClass('active');

  });

  //event listeners for next and previous photos
  $('a.prev').on('click', renderPreviousPhoto);
  $('a.next').on('click', renderNextPhoto);

  //event listeners for the like and fav buttons
  $('section header').on('click', handleButtonClick);

  //event listeners for submitting our form
  $('form').submit(handleNewComment);
});

function getCurrentPhoto() {
  return $('figure.active');
}

function handleNewComment(event) {
  event.preventDefault();
  console.log('form submitted')
  let formDataString = $(this).serialize();
  $.ajax({
    type: "POST",
    url: URL + '/comments/new', 
    data: formDataString, 
    success: function(resData) {
      console.log("SUCCESS! response data", resData);
      //clear the form
      event.target.reset()

      //render the new comment
      $('div#comments ul').append(templates.photo_comment({comments: [resData]}))
    }
  });
}

function handleButtonClick(event) {
  event.preventDefault();
  console.log('clicked out element');
  let button = event.target;
  let buttonType = button.getAttribute('data-property');
  if (buttonType) {
    console.log('clicked out buttons');
    //issue a post request and handle the response
    let buttonUrl = button.getAttribute('href');
    let currentId = parseInt(getCurrentPhoto().attr('data-id'), 10);
    $.post(URL + buttonUrl, { photo_id: currentId }, function(responseData) {
      console.log('response', responseData)
      let newTotal = responseData.total;
      button.textContent = button.textContent.replace(
        /\d+/,
        newTotal,
      );
    })
  }
}

function postLike(event) {
  console.log('click the like button')
  event.preventDefault();
  let $currentPhoto = getCurrentPhoto();
  let currentId = parseInt($currentPhoto.attr('data-id'), 10)
  $.ajax({
    type: "POST",
    url: URL + `/photos/like`,
    data: {photo_id: currentId},
    success: handleLikeResponse
  })
}

function handleLikeReponse(resData) {
  console.log('successful response', resData);
}

function postFavorite(event) {
  event.preventDefault();
}

function renderNextPhoto(event) {
  console.log('click next');
  event.preventDefault(); 
  let $nextPhoto;
  let $currentPhoto = getCurrentPhoto();
  if ($currentPhoto.next('figure').length !== 0 ) {
    $nextPhoto = $currentPhoto.next('figure');
  } else {
    $nextPhoto = $('div#slides figure').first();
  }
  togglePhotos($currentPhoto, $nextPhoto)
}

function renderPreviousPhoto(event) {
  console.log('click prev');
  event.preventDefault();
  let $prevPhoto;
  let $currentPhoto = getCurrentPhoto();
  if ($currentPhoto.prev('figure').length !== 0 ){
    $prevPhoto = $currentPhoto.prev('figure')
  } else {
    $prevPhoto = $('div#slides figure').last();
  }
  togglePhotos($currentPhoto, $prevPhoto)
}

function togglePhotos($photoToHide, $photoToShow) {
  $photoToHide.toggleClass('active');
  $photoToShow.toggleClass('active');
  renderPhotoInfoAndComments(parseInt($photoToShow.attr('data-id'), 10));
}

//photo ID must be of type number
function renderPhotoInfoAndComments(photoId) {
  clearOldPhotoInfoAndComments();
  let photoToRender = allPhotos.filter((photo) => {return photo.id === photoId})[0];
  console.log('photo to render', photoToRender);
  renderPhotoInfo(photoToRender);
  renderPhotoComments(photoToRender);
}

function clearOldPhotoInfoAndComments() {
  $('header').children().remove();
  $('div#comments ul').children().remove();
}

function renderPhotoInfo(photo) {
  $('section header').append(templates.photo_information(photo));
}
function renderPhotoComments(photo) {
  $.getJSON(URL + `/comments?photo_id=${photo.id}`, function(commentData) {
    $('div#comments ul').append(templates.photo_comment({comments: commentData}))
  })
}

/*
  What did LS do differently here? they used fetch, and not jquery. That's pretty
  much it. Only other thing they did differently was use an object to hold the 
  handlebars functions that render the templates. The functions were indexed by the 
  id of the script element in the html file, so it was pretty easy to find them. 
  That's actually probably the better way to do these, since we'll need those functions
  in multiple places in this js file: we shouldn't have them local to the first event
  handler function... or, I guess not. As long as we attach event listners to dom
  elements within the highest event listener, we'll be okay because those will 
  have the templates variable in scope. 

  They also have functions for each individual piece: ie, one function for rendering
  all photos, one for rendering photo info and another for getting comments. 

  What did LS do for the slideshow / transitions portion?
    well, I took a page out of their book and stored the photo info 
    as a local variable so I didn't need to issue another call to the
    server to get the same info again. I also changed the way they 
    tracked the photos that aren't displayed: I created an active class
    that the stylesheets are configured to display. The js is set up
    such that there's only one photo at a time that's has the active
    class, so there's only one photo at a time that's displayed
    
    What did LS do? 
    They created a slideshow object... interesting. 
    Looks like the object has methods that perform slideshow operations.
    That's a pretty good way to structure the code, keep all the slideshow
    stuff within one single object. 
    They also added two new classes, one to display images, one to hide 
    them. I'm curious to see how they managed to render the photo info
    and comments without clearing them though. 

  Like and comment portion
    I got stuck here for a bit. I hooked up the event listeners to the
    anchor elements for the actual buttons. It looks like anchors 
    will send a get request to the url in their href attribute, even
    if you prevent the default event in the event handler. So I'll
    try taking a page out of their book and putting a general listener
    on one of the parent elements instead. 

    Once I did that, it was easier. I didn't see that you could combine 
    the functionality of both buttons into one handler function though, I
    was fully ready to spin up two of them. I also needed some help with
    the string replacement portion, because I didn't think of regex

    There's also a bug in what I've got now: since we build the info for a 
    picture based on what's taken at the start of the page, we don't get
    an updated count of likes and such in our local copy when we post a 
    like / favorite. That means that if we like a pic, go to a new one,
    then go back to the one we liked, our like isn't tracked in the old
    pic because its source of data is the stale, local copy. 
*/