/*
  Given some JS and a starting html page, edit the html to match what
  the js will do to it when it runs
*/

//create a header
const node1 = document.createElement('header');
const node2 = document.createTextNode('Dynamic Content');

//header has a paragraph element with hello world within it
node1.innerHTML = '<p>Hello World!</p>';
//append the header to the body
document.body.appendChild(node1);

//first element child is the header. insert the text node before the header
//or, it inserts it as a child of the header
document.body.firstElementChild.insertBefore(node2, node1.firstElementChild);

//create an h1 node. Add the dynamic content to it. this necessarily means we remove 
//it from its old place
const node3 = document.createElement('h1');
//makes node 2 a child of node 3. So this puts the text content inside node 3
node3.appendChild(node2);

//insert h1 with dynamic content as a child of the header, 
document.body.firstElementChild.insertBefore(node3, node1.firstElementChild);

node1.setAttribute('id', 'header');
node3.classList.add('emphasis');
node3.classList.add('light');

//create a style node. insert it as a child of head
const node4 = document.createElement('style');
const css1 = ".emphasis { font-weight: bold; }";
const css2 = ".light { color: gray; }";
node4.type = 'text/css';

node4.appendChild(document.createTextNode(css1));
node4.appendChild(document.createTextNode(css2));

document.head.appendChild(node4);