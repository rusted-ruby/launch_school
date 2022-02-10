//write true if a year is a leap year and false otherwise.

//a leap year is any year divisible by 4, unless its divisible by 100. But if the year
//is evenly divisible by 400, then it is a leap year. So 200 isn't a leap year, but 400 is. 

//400 is the least restrictive condition: if its evenly divisible by 400, it is a leap year.
//after that, if it is divisble by 100, it isn't a leap year.
//after that, if it is divisible by 4, it is a leap year.
//else, false

//now, do this with the julian calendar: for any year before 1752, a leap year is any year 
//evenly divisible by 4. after that year, the old rules apply. 

function isLeapYear(year) {
  if (year >= 1752) {
    if (year % 400 === 0 ) { 
      console.log(true);
      return true
    } else if (year % 100 === 0 ) {
      console.log(false);
      return false
    }
  }
  console.log((year % 4 === 0 ))
  return (year % 4 === 0 )
}

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true