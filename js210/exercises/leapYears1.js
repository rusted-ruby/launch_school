//write true if a year is a leap year and false otherwise.

//a leap year is any year divisible by 4, unless its divisible by 100. But if the year
//is evenly divisible by 400, then it is a leap year. So 200 isn't a leap year, but 400 is. 

//400 is the least restrictive condition: if its evenly divisible by 400, it is a leap year.
//after that, if it is divisble by 100, it isn't a leap year.
//after that, if it is divisible by 4, it is a leap year.
//else, false

function isLeapYear(year) {
  if (year % 400 === 0 ) { 
    console.log(true);
    return true
  } else if (year % 100 === 0 ) {
    console.log(false);
    return false
  } else if (year % 4 === 0 ) {
    console.log(true);
    return true
  } else {
    console.log(false);
    return false
  }
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
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true

//what did LS do? They didn't have an else statement. just return the result of year % 4 === 0

