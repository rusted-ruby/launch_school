/*
take a year as an argument and return the number of Friday the 13ths in that year. 
assume the year is greater than 1752. 

we'll need to use date objects here. 
create a date object like this: new Date('august 19, 1975'). then we can call methods like
getDay to return the day number of the date object. 0 is Sun, 1 is min... 5 is Friday
so we make a loop that iterates 12 times. each time 
*/

function fridayThe13ths(year) {
  year = String(year);
  let unluckyDays = 0;
  for (let i = 1; i <= 12; i += 1) {
    let date = new Date(String(i) + ' 13 ' + year);
    let day = date.getDay();
    if (day === 5) {
      unluckyDays += 1
    }
  }
  console.log(unluckyDays)
  return unluckyDays
}

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2