/*
  impl functions for canceling things. One cancels schedules and 
  accetps a schedule ID. The other cancels bookings and accepts
  a booking ID
*/
const SUCCESS_STATUS = 204;

//DELETE to /api/schedules/schedule_id: success is 204
function cancelSchedules(scheduleId){
  sendCancelRequest(
    'DELETE',
    '/api/schedules',
    scheduleId,
  )
  .then((message) => alert(message))
  .catch((message) => alert(message));
}

//PUT to api/bookings/booking id: success is 204
function cancelBookings(bookingId){
  sendCancelRequest(
    'PUT',
    '/api/bookings',
    bookingId,
  )
  .then((message) => alert(message))
  .catch((message) => alert(message));
}

function sendCancelRequest(httpMethod, url, id){
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest;
    url = url + '/' + `${encodeURIComponent(id)}`
    req.open(httpMethod, url);
    req.addEventListener('load', event => {
      if (req.status === SUCCESS_STATUS) {
        resolve('cancelation successfil');
      } else {
        reject('cancelation failed');
      }
    });

    req.send();
  })
}