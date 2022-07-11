/*
  For this exercise, display the bookings made for a specific date
  We'll need an unordered list that has sub lists: 
  First displays the dates that schedules are booked for
  when you click on a date, it displays a second unordered list
  that shows information on the schedules booked for that day

  High level things that we'll need to do:
    query dates that have booked schedules
    display that information in the page
    handle click events
      for each click event, get the date. query the bookings
      with details for a given date
*/
let dateList;

document.addEventListener('DOMContentLoaded', event => {
  dateList = document.getElementById('datesWithBookings')
  getBookedDatesAndDetails()
    .then((dates) => populateDatesOnPage(dates))
    .catch((message) => alert(message));
  dateList.addEventListener('click', handleClickDate);
})

function getBookedDatesAndDetails(){
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest;
    req.open('GET', 'http://localhost:3000/api/bookings');
    req.addEventListener('load', event => {
      console.log('bookings response', req.response);
      if (req.status === 200 ){
        resolve(JSON.parse(req.response))
      } else {
        reject('could not retrieve bookings from server')
      }
    })
    req.send();
  })
}

function populateDatesOnPage(dates){
  dates.forEach((date) => {
    let li = document.createElement('li');
    li.textContent = date;
    dateList.appendChild(li);
  })
}

function handleClickDate(event){
  console.log('clicked a date');
  event.preventDefault();
  let dateEle = event.target;
  let dateStr = dateEle.textContent;
  getBookingsForDate(dateStr)
    .then((details) => addDetailsToPage(dateEle, details))
    .catch((message) => alert(message));
}

function getBookingsForDate(dateStr) {
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest;
    let url = `http://localhost:3000/api/bookings/${encodeURIComponent(dateStr)}`;
    console.log('making a get req to ', url);
    req.open('GET', url);
    //req.setRequestHeader("Content-Type", 'application/json; charset=utf-8');
    //let jsonData = JSON.stringify({date: dateStr})
    req.addEventListener('load', event => {
      if (req.status === 200) {
        //debugger
        resolve(JSON.parse(req.response));
      } else {
        reject('unable to find bookings for provided date');
      }
    })
    req.send()
  })
}

function addDetailsToPage(dateEle, details) {
  console.log('request details ', details)
  let detailList = document.createElement('ul');
  dateEle.appendChild(detailList);
  details.forEach((detail) => {
    let li = document.createElement('li');
    li.textContent = detail.join(' | ');
    detailList.appendChild(li);
  })
}

/*
  Next up: see what LS did for this.
    Again, they have manual code that creates the html page... kinda gross
    One thing they do is check to see if a date has child elements with a childElementCount
    property. Then they only fire the xhr request if there are no children, that's an
    improvement.

    Other than that, pretty straightforward. 
*/