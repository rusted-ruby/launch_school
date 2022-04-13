//these exercises match up with this page: 
//https://d186loudes4jlv.cloudfront.net/fe2/exercises_objects_and_dom/dom_assignment.html#

//set the header properly
let heading = document.querySelector("#primary_heading")
heading.classList.add('heading')

//could also use this
//heading.setAttribute('class', 'heading');

//Make sure a list has bullets
let ul = document.querySelector('ul')
ul.classList.add('bulleted')

//create a link that works to show / hide a notice on the page. 
let hidden = document.querySelector('#notice');
let link = document.querySelector('#toggle');
let obj = {
  'hidden': 'visible',
  'visible': 'hidden'
}
function toggler(e){
  e.preventDefault
  let currentVal = hidden.getAttribute('class');
  hidden.setAttribute('class', obj[currentVal])
}
link.onclick = toggler
function noticeToggler(e) {
  e.preventDefault
  hidden.setAttribute('class', 'hidden')
}
hidden.onclick = noticeToggler

//change the text of the mult paragrapht to the result of the operation
//assume I don't need to parse anything
let multP = document.querySelector('p#multiplication');
multP.textContent = String(13 * 9);

//apply CSS styles to the body
let body = document.querySelector('body');
body.id = 'styled'
//could also have done this
//document.body.setAttribute('id', 'styled');