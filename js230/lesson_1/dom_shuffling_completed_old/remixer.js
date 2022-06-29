console.log('pointing to the right place');

//put the header links on top
let headers = document.querySelectorAll('header');
let mySiteHeaderLinks = headers[1];
let target = document.querySelector('main');
document.body.insertBefore(mySiteHeaderLinks, target);

//put the mySite header inside the element with the links
let mySite = document.querySelector('h1');
mySiteHeaderLinks.insertAdjacentElement('afterbegin', mySite)

//move the images to be within the article element.
let article = document.querySelector('article');
let figures = document.querySelectorAll('figure');
for (i = 0; i < figures.length; i += 1) {
  let figure = figures[i]
  article.appendChild(figure)
}

//swap the images so they're matched up with their captions. 
let babyMop = figures[0].querySelector('img');
let chinStick = figures[1].querySelector('img');
figures[0].replaceChild(chinStick, babyMop);
figures[1].insertAdjacentElement('afterbegin',babyMop)

/*
What did LS do?
pretty similar to what I did. Key pieces are that they use insertbefore(img, null)... my guess 
is that this puts the new element first in the parent element. 

They also use some cool css selector syntax with body > header and main > h1... that would be 
good to know. 
*/