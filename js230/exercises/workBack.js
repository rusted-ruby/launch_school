/*
given the below js code, craft an html document that will return the
following pieces when the js code is executed in sequence

This one was hard: didn't end up doing all of it.

//head has three children
> console.log(document.head.childNodes.length);
= 3

//first element child of the head is a title
> console.log(document.head.children[0].tagName);
= 'TITLE'

//head has text content of Title and some whitespace.
There must be empty text nodes before the title element in head: the title element
needs to be indented after had
> console.log(document.head.textContent);
= "
      Title
    "

//body has three element children: header, section and body.
> console.log(document.body.children.length);
= 3

//body has 5 total children (so 2 text nodes sprinkled in)
> console.log(document.body.childNodes.length);
= 5

//there is a div two generations into the body
> console.log(document.querySelector('div').parentNode.parentNode.tagName);
= 'BODY'

//there is a div that contains a section. That section has three element children
> console.log(document.querySelector('div section').children[2].nextElementSibling);
= null

//there is only one div element?
> console.log(document.querySelectorAll('div').length);
= 1

//header
> var nodeA = document.body.firstElementChild;

//the footer has only one element child
> console.log(document.querySelector('footer').children.length);
= 1

//returns the replaced node: the first element child of body is a header
> console.log(document.querySelector('body').replaceChild(
>   document.querySelector('footer'), document.body.firstElementChild).tagName);
= 'HEADER'

//this is the format of the header. Now the header is at the end of the body
> console.log(document.body.appendChild(nodeA));
= <header>Header<header>

//oh god
//There is a section that has text content of H1, Hello, World (but maybe spaced out)
> console.log(
  //take the first section element's text content
  document.querySelector('section').textContent
  //split it into an array along newline chars
  .split("\n")
  //map the resultant split. trim the whitespace off the text
  .map(function(text) {
>   return text.trim();
> })
  //filter out the trimmed whitespace
  .filter(function(text) {
>   return text.length > 0;
> }));
= ["H1", "Hello", "World"]

//the first section has three element children: h1, p and p
> console.log(document.querySelector('section').children);
= HTMLCollection(3) [h1, p, p]

//lots of newlines in the first section
> console.log(document.querySelector('section').textContent);
= "
            H1
            Hello
            World
          "

//footer has a span element within it with a class of emphasis
> console.log(document.querySelector('span.emphasis').parentNode.tagName);
= 'FOOTER'
*/

