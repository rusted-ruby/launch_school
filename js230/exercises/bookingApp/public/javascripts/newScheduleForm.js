/*
  Create a form to add schedules
  There should be a button that allows a user to add new schedules
  and submit them all.

  This seems like a good job for handlebars templates!

  One thing to think about: how can I make the submit button submit 
  ALL the forms? Well, that won't be too hard. Just use query Selector all
  and run a loop over all the forms to submit them... separate http requests, or nah?

  Also, going to be kind of a pain to build the handlebars templates since I'll
  need the dropdown with all the staff names... or maybe that won't be super hard,
  since I'll just need to use a partial to build out that dropdown menu. 

  For fun, since we're doing this one with handlebars, let's also do it
  with jquery

  Well, we'll need our list of staff first... I wonder if I can use

  hmm, this is proving to be harder than I thought... How can I use
  the async / await keywords here to make sure I get this?


  Maybe don't even do that... start everything out with a xhr request
  to get the staff info, and have ALL THE REST of the code in the success
  callback for that request... ugh, I'm starting to see how that stuff
  can get messy now. 
*/

//first, load our document, and stick a new form in the ui. Then, attach event
//listeners to the add new schedules button and the submit button

//init our formMaker for the handlebars template here so fns have access to it.
let formMaker;

//when the DOM loads, get our staff. If the call succeeds, attach the
//event listeners to the page that make the page run
$(function() {
  getAllStaff()
    .then((staff) => getStaffCallback(staff))
    .catch((message) => alert(message));
})

//return an object of staff members. Format is like this:
// {staffName: staff ID Number}
function getAllStaff() {
  //return a promise to get the staff members
  return new Promise((resolve, reject) => {
    let staff = []
    //if the request is successful, parse the data into an obj we can work with
    $.get('http://localhost:3000/api/staff_members', function(resData) {
      console.log('getStaff http request successful');
      resData.forEach((staffMember) => {
        let obj = {
          name: staffMember.name,
          id: staffMember.id,
        };
        staff.push(obj);
      });
      resolve(staff)
    })
    //if the request fails, return an error message. 
    .fail(function() {
      reject('Failed to return staff members');
    });
  })
}

/*
  Okay, now that we've got our staff info, what do we need to do in
  this callback?
    First, register out handlebars components. We'll need them.
      register our partial as a partial
      create our function to build a form.
    build out a single form from the handlebars template to begin
    add an event listener to the add schedules button to add a new form
    add an event listener to the submit button to handle form submission

    We'll still need our staff object in the callbacks though... how Can I do that?
*/
function getStaffCallback(staff) {
  console.log('in the get staff callback');
  

  //register handlebars components
  Handlebars.registerPartial('dropdown', $('#dropdown').html());
  formMaker = Handlebars.compile($('#scheduleForm').html());

  //build one form via the handlebars components.
  createNewScheduleForm(staff, 1);
  
  //event listener to add more schedules to the page
  $('#addSchedules').click(staff, handleClickAddSchedules);

  //event listener to submit the form(s) to the server
  $('#submitSchedules').click(staff, handleClickSubmit);
}

function createNewScheduleForm(staff, currentId) {
  $('#allNewScheduleForms').append(formMaker({
    id: currentId,
    staff: staff,
  }))
}

let currentFormId = 1;
function handleClickAddSchedules(event) {
  event.preventDefault();
  let staff = event.data;
  currentFormId += 1;
  createNewScheduleForm(staff, currentFormId)
}

/*
  What needs to happen in this callback?
    Get all of the forms that we've created.
    Validate all of the forms that we've created.
    send a post request to the server if the forms are valid
*/
function handleClickSubmit(event) {
  event.preventDefault();
  let staff = event.data; 
  let forms = Array.prototype.slice.call($('form'))
  if (allFormsAreValid(forms)) {
    submitForms(forms, staff);
    resetForms(forms);
  } else {
    alert('Please check your inputs')
  }
}

//forms is an array containing our form html elements
function allFormsAreValid(forms) {
  let formIsValid = true;
  for (let i = 0; i < forms.length; i += 1) {
    let form = forms[i];
    let formData = new FormData(form)
    //formData.entries returns an iterator of datapoints in the form
    //call next on the iterator to get the next value.
    //the result will be an object with a done property and a value property
    //done is a bool thats true if there are no more entries
    //value is an array with two entries: first is the name of the field, second is 
    //its value. 
    //create an iterator and loop over all the data until we're done. Break the
    //loop if any value is unpopulated.
    let entries = formData.entries();
    let entry = entries.next();
    while (!entry.done) {
      if (entry.value[1] === '') {
        formIsValid = false
        break
      }
      entry = entries.next();
    }

    //break the loop if the form isn't valid
    if (!formIsValid) {
      break
    }
  }
  return formIsValid
}

//how is the API expecting the forms to be formatted?
//object with a schedules field that contains an array of schedules to add. The
//array has objects with a staff_id, date and time field
//so... what needs to be done?
  //build the object we'll pass to the xhr request
  //actually send the xhr request. 
function submitForms(forms, staff) {
  let reqData = buildReqData(forms, staff);
  console.log('request data', reqData);
  let jsonData = JSON.stringify(reqData);
  console.log('json data', jsonData);
  //lets use jquery for the request!
  //tried to use the post function for this, but couldn't figure out
  //how the data portion worked. Let's just use ajax
  // $.post('http://localhost:3000/api/schedules', reqData)
  //   .done(function(res) {
  //     console.log('post was successful', res);
  //   }).fail(function(message) {
  //     console.log(message)
  //     alert('post request to server failed ' + `${message}`)
  //   });
  //looks like in order for this to work, I need to serialize the object
  //into a json string, and specify the data type as json in the headers.
  //so the same as last time. 
  $.ajax({
    type: "POST",
    url: 'http://localhost:3000/api/schedules',
    data: jsonData,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  }).done(function(res) {
    console.log('post was successful', res);
    alert("post request successful: new schedules created")
  }).fail(function(res) {
    console.log(res);
    alert('post request to server failed')
  })
}

function buildReqData(forms, staff) {
  let scheduleArr = [];
  for (let i = 0; i < forms.length; i += 1) {
    let form = forms[i];
    let formData = new FormData(form);
    scheduleArr.push(getNewScheduleObj(formData, staff));
  }
  return {
    schedules: scheduleArr
  }
}

function getNewScheduleObj(formData, staff) {
  let entries = formData.entries();
  let staffName = entries.next().value[1];
  let date = entries.next().value[1];
  let time = entries.next().value[1];
  let staffId = getStaffId(staffName, staff);
  return {
    staff_id: staffId,
    date: date,
    time: time
  }
}

function getStaffId(name, staffs) {
  for (i = 0; i < staffs.length; i += 1) {
    let staff = staffs[i]
    if (staff.name === name) {
      return staff.id
    }
  }
}

function resetForms(forms) {
  forms.forEach((form) => {
    form.reset()
  })
}

/*
  What did LS do? things to keep an eye on
    How did they handle getting and tracking the staff data?
    How did they keep track of their handlebars template creator?
    How did they parse their form data while validating + submitting?

  Wow, they did a LOT of different things here.
    First, they didn't use handlebars... they have a function that manually creates
    a whole new html form when the user adds a new schedule... that's pretty gross

    To track staff, they have a constant defined at the top of the page, and populate it
    via an xhr request locked within an Immediately executed function.

    How did they parse their data?
      they track their form data via a constant they aquire using query Selector.
      they use bracket notation.value to get the values (?)
      Looks like when you have a form object, you can just go like form[<name of input>].value
      to get the value... huh, that's cool!
      They so if your inoput has a name, just do
      form[<input name>] to get the input. From there, you can get the value. 
*/