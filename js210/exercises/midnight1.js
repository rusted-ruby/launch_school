//write a function that uses the Date object to return the time of day given the number of 
//minutes past midnight. Number of minutes can be positive or negative. 

//how can we do this with the date object? well, if we can get a date object that represents
//a time at midnight in minutes, then we can add or subtract the function argument to that
//time object. Then, we can format the resultant date object via  the get hours and get
//minutes methods.

function timeOfDay(minChange) {
  //get a midnight date object.
  midnight = getMidnight()

  //format the date object as a number in mins and add the argument to it.
  midnightMs = midnight.getTime();
  midnightMin = (midnightMs / 1000) / 60;
  adjustedDateMin = midnightMin + minChange;

  //get a new date object based on the adjusted number of minutes
  adjustedDateMs = adjustedDateMin * 1000 * 60;
  adjustedDate = new Date(adjustedDateMs);

  //get and format the adjusted hours.
  adjustedHours = adjustedDate.getHours();
  adjustedMins = adjustedDate.getMinutes();
  console.log(formatZeros(adjustedHours, 2) + ':' + formatZeros(adjustedMins, 2))
}

function formatZeros(number, len) {
  let numStr = String(number);
  while (numStr.length < len) {
    numStr = `0${numStr}`;
  }
  return numStr
}

function getMidnight() {
  let today = new Date();
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);
  return today
}

timeOfDay(0);          // "00:00"
timeOfDay(-3);         // "23:57"
timeOfDay(35);         // "00:35"
timeOfDay(-1437);      // "00:03"
timeOfDay(3000);       // "02:00"
timeOfDay(800);        // "13:20"
timeOfDay(-4231);      // "01:29"