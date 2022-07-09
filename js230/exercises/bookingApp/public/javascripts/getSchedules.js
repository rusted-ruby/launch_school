/*
Getting schedules:
	• Need to implement a function that retrieves all the schedules available for booking. In other words, all the scheudles where student email is null. 
	• If there are no schedules available, throw an alert.
	• If there are scedules available, display them as an object where key is the staff member's ID and value is the # of schedules they have available. 
	• Need to cancel the request after 5 seconds… 
Inform the user if the request succeeds, or fails. 

lol, I forgot about the data processing... I'll do that now, the
core is what's important
*/

function getSchedules() {
  //create an XHR object
  let req  = new XMLHttpRequest();
  req.open('GET', 'http://localhost:3000/api/schedules');
  req.timeout = 5000; //timeout after 5 seconds.
  req.responseType = "json";

  
  //handle the request.
  req.addEventListener('load', event => {
    //handle the case where we don't find any schedules
    if (!req.response) {
      alert('data not found');
      return
    }

    //need to parse this into an object I can interact with...
    let allSchedules = req.response;
    let availableSchedules = allSchedules.filter((schedule) => {
      return schedule.student_email !== null
    });
    if (availableSchedules.length === 0 ){
      alert('there are no schedules available for booking');
    } else {
      let finalData = {};
      availableSchedules.forEach((schedule) => {
        let staffId = `Staff: ` + String(schedule.staff_id);
        if (finalData[staffId] === undefined) {
          finalData[staffId] = 1;
        } else {
          finalData[staffId] += 1;
        }
      })
      console.log(finalData)
      alert(`${finalData}`)
    }

  
  });

  //handle the timeout case
  req.addEventListener('timeout', event => {
    alert('the request timed out: please try again');
  });

  req.addEventListener('loadend', event => {
    alert('the request has completed.')
  })

  req.send();
  
  //return availableSchedules

  //Last thing I'm not sure of... what do we do with the data once we
  //have it?
}

console.log(getSchedules());