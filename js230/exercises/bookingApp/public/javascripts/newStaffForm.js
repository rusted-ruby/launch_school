const SUCCESS_STATUS = 201;

document.addEventListener('DOMContentLoaded', event => {
  document.querySelector('#new_staff_form').addEventListener('submit', handleNewStaffForm);
})

function handleNewStaffForm(event) {
  event.preventDefault();

  let emailInput = document.querySelector('#email').value;
  let nameInput = document.querySelector('#name').value;

  let data = new FormData(event.currentTarget);

  console.log('form data', data);

  //validate inputs
  if (emailInput === '' || nameInput === '') {
    alert('Cannot submit form. Check your inputs')
    return
  }

  //init the request. its a post request, expects two params: name and email. 
  let req = new XMLHttpRequest();
  req.open("POST", "http://localhost:3000/api/staff_members");

  // //configure the request to expect a json object
  // req.setRequestHeader('Content-Type', "application/json; charset=utf-8");
  
  // //configure the response to also be a json object
  // //req.responseType = 'json'; => Don't do this: we want to log any
  // //error message we receive from the server, and that can't be a 
  // //json object.

  // //create a json object from the user's input
  // let jsonData = JSON.stringify(
  //   {
  //     name: nameInput,
  //     email: emailInput,
  //   }
  // );

  //handle the possible responses from the server.
  req.addEventListener("loadend", event => {
    console.log('request response full', req);
    //success status: 
    if (req.status === SUCCESS_STATUS) {
      let resData = JSON.parse(req.response);
      console.log(resData)
      alert(`created a new staff member with an ID of ${resData.id}`)
    } else {
      alert('post request unsuccessful. Please try again')
    }
  })

  //send the request with the json data
  req.send(data)
}

/*
  Now, what did LS do? 
  Well first, they had some pretty cool styles in their HTML. I'll
  nab those

  They used the FormData object to just get the form's data without
  needing to obtain it manually... that's really cool. I don't need 
  to build the json object or anything.

  What is really going on under that hood though... why does that work?
  Why am I able to pass the form data as part of the request, but LS 
  still parses it into a json object?

  Look like either will work because of how they've configured the 
  server. 

*/