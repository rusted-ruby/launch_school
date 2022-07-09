/*
  Create a function for booking a schedule
  only one schedule can be booked at once. 

  If the student does not exist, I'll need to display a form that allows
  the student to be added to the database. When I add them, I automatically
  create them in the db, and also create the schedule booking for them

  I'll also need to get the open schedules to display in a dropdown...
  I have a function to do that, but I'll need to figure out how to
  integrate it. 

  Use handlebars to handle building the open schedules, but use raw 
  xhr for the http portion this time around. 

  First: build the html: seems easy enough. have a basic form for
  the schedules. Use handlebars templates to build the dropdown menu.
  Also have another form for creating a student. Have a class that 
  hides that form by default. 

  If needed, we unhide the form and use the callback to populate the 
  new student form with the email and booking sequence that's needed.

  Basic html form is created. What are the high level pieces we need to complete?
    populate the available bookings
    handle a new booking
      if the student exists, create a new booking
      if the student doesn't exist, display new student form
    handle creating a new student. 

  to start... populate the available bookings.
  do this in a similar way to last time. Get the data via an xhr request, then 
  pass it to a callback that builds the dropdown and attaches event listeners to the 
  proper elements.

  How to handle the fact that it periodically times out though? I guess I'll need to
  keep sending the request until it actually goes through... 

  I could do a set interval with a delay of 5000ms that has a callback to get the 
  data... then within the callback, I stop the interval after it goes through...

  Or do I even need to handle this? every 1 second, send a request, then abort it?
  Let's just not timeout the request and get it as is. 
*/

//init the variable for template creator here so we can finish rendering the page.
let scheduleMaker;

document.addEventListener('DOMContentLoaded', event => {
  getServerData()
    .then((serverData) => finishPageSetup(serverData))
    .catch((message) => alert(`${message}`))
})

function getServerData() {
  return new Promise((resolve, reject) => {

    //get the staff that we need
    let req = new XMLHttpRequest;
    let allStaff = [];
    req.open('GET', 'http://localhost:3000/api/staff_members')
    req.responseType = 'json'
    req.addEventListener('load', event => {
      allStaff = req.response;
    })
    req.send();


    //get the schedules that we need
    let availableSchedules = [];
    let id = setInterval(() => {
      console.log('sending a request');
      let req = new XMLHttpRequest;
      req.open('GET', 'http://localhost:3000/api/schedules');
      req.timeout = 5000; //timeout time is less than the interval time
      req.responseType = 'json';

      req.addEventListener('load', event => {
        clearInterval(id)
        console.log('response loaded')
        let allSchedules = req.response;
        availableSchedules = allSchedules.filter((schedule) => {
          return schedule.student_email === null
        });
        if (availableSchedules.length === 0) {
          reject("There are no schedules available for booking");
        } else {
          //add the name of the staff member to each of their schedules. 
          availableSchedules.forEach((schedule) => {
            schedule.staff_name = allStaff[schedule.staff_id - 1].name
          })
          resolve(availableSchedules)
        }
      })

      req.addEventListener('timeout', event => {
        //req.abort();
        console.log('the request timed out. Trying again');
      })
      req.send();
    }, 7000);
  
  })
}

//datais an array of format
//{id: 1, staff_id: 1, student_email: null, date: '07-01-18', time: '06:10', staff_name: 'name'}
//need to translate the staff and the schedules. 
/*
  [x] populate the available bookings
  handle a new booking
    if the student exists, create a new booking
    if the student doesn't exist, display new student form
  handle creating a new student. 
*/
function finishPageSetup(serverData) {
  console.log("we've got our data ", serverData);
  buildScheduleDropdown(serverData);

  document.getElementById('newScheduleButton').addEventListener('click', handleNewBooking);
  document.getElementById('newStudentButton').addEventListener('click', handleNewStudent)
}

//Format for what's in the schedule is 
//staff name | date | time
function buildScheduleDropdown(serverData) {
  scheduleMaker = Handlebars.compile(document.querySelector('#scheduleDropdown').textContent);
  document.querySelector('form#bookingForm').insertAdjacentHTML(
    'afterbegin',
    scheduleMaker({schedules: serverData})
  )
}

//here, we just need the id of the schedule and the student's email...
//if there's no student, then the response will be.
// HTTP/1.1 404 Not Found
// 'Student does not exist; booking_sequence: {sequence}'
function handleNewBooking(event) {
  event.preventDefault();
  console.log('handling a new booking');
  let form = document.getElementById('bookingForm');

  //issue a post request to the server for the student
  let req = new XMLHttpRequest;
  req.open("POST", "http://localhost:3000/api/bookings");

  let formData = new FormData(form);

  //handle the success case
  req.addEventListener('load', event => {
    //handle success case: display happy messages, reset form and remove the option
    //element the user selected. 
    if (req.status === 204) {
      console.log('successfully booked a schedule!');
      alert('successfully booked a schedule');
      removeSelectedBooking(form); //this isn't working... need to fix it
      form.reset();
    //handle error case
    } else if (req.status === 404) {
      console.log('request error!', req.response);
      if (req.response.indexOf('booking_sequence') !== -1){
        alert('email given does not match a student in the db. please add the student');
        let email = form['student_email'].value;
        let bookingSeq = req.response.split(': ').pop();
        displayAndPopulateNewStudentForm(email, bookingSeq)
      } else {
        alert('schedule requested was not found!')
      }
    }
  })

  req.send(formData);
}

/*
  Before we dig into this, what do we need to create a new student?
    email
    name
    booking sequence
  let's force this one into json data just for practice
*/
function handleNewStudent(event){
  event.preventDefault();
  console.log('handling new student')
  let form = document.getElementById('newStudentForm');
  let req = new XMLHttpRequest;
  req.open('POST', 'http://localhost:3000/api/students');
  req.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
  let rawData = {
    email: form['email'].value,
    name: form['name'].value,
    booking_sequence: form['booking_sequence'].value,
  };
  let jsonData = JSON.stringify(rawData);

  req.addEventListener('load', event => {
    //handle success case
    if (req.status === 201) {
      hideAndResetNewStudentForm();

      //manually trigger a click event to create our new booking
      document.getElementById('newScheduleButton').dispatchEvent(
        new Event('click')
      )
    }
    alert(req.response);
  })

  req.send(jsonData);

}

function displayAndPopulateNewStudentForm(email, bookingSeq) {
  console.log('email', email);
  console.log('booking', bookingSeq);
  let form = document.getElementById('newStudentForm');
  form.classList.remove('hidden');
  form['email'].value = email;
  form['booking_sequence'].value=bookingSeq;
}

function hideAndResetNewStudentForm(){
  let form = document.getElementById('newStudentForm');
  form.reset();
  form.classList.add('hidden');
}

function removeSelectedBooking(form){
  let select = form['id'];
  let options = Array.prototype.slice.call(select.children);
  for (let i = 0; i < options.length; i += 1) {
    let option = options[i];
    if (option.value === select.value) {
      option.remove();
      break
    }
  }
}

/*
  What did LS do?
    How did they handle getting the available schedules? I feel like my solution is
    kind of clumsy.
      They didn't do anything explicit to handle the timeout portion of this.


  This is working well too! Let's see what LS did.
    They put both the new student and booking pieces into one form
    they started with an IIFE to get the available schedules. They also had another
    IIFE inside it to get the staff info create the dropdown. 

    They have a function to manually build an html document... that is really gross, and I 
    hope I don't need to do that in the exam... or maybe I should at least look at it
    so I know what is possible...

    Interesting: looks like you can change the page by saying "window.location.href = <path>"

    That's it... other than that, its pretty similar
*/