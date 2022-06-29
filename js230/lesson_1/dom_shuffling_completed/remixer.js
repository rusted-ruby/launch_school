console.log("we are running the script");

//images for baby mop and chin stick need to be swapped
let imgs = document.querySelectorAll('img');
let babyImg = imgs[0];
let stickImg = imgs[1];
let figs = document.querySelectorAll('figure');
let babyFig = figs[1];
let stickFig = figs[0];
babyFig.replaceChild(babyImg, stickImg);
stickFig.insertAdjacentElement('afterbegin', stickImg);

//insert images into the article element
let article = document.querySelector('article');
article.insertAdjacentElement('beforeend', stickFig);
article.insertAdjacentElement('beforeend', babyFig);

//My Site! h1 needs to be in the same header element as the links
let h1  =document.querySelector('h1');
let headers = document.querySelectorAll('header');
headers[1].insertAdjacentElement('afterbegin', h1);

//home, about and contact links need to be above site description
let body = document.querySelector('body')
body.insertAdjacentElement('afterbegin', headers[1]);

