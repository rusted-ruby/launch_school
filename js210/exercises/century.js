//write a function that takes a number and tells you what century it is. centuries are from
//1901 to 2000 is the 20th century. Also return proper syntax for the letters: so
//'st', 'th', 'rd', 'th', etc. 

//so two problems here
  //calculating the right century. this can be easy with some formulas. Math.floor(year / 100)
  //will give you the quotient of year and 100. the century will always be the quotient + 1
  //string mgmt => this will be the harder part... what are all the different numbers we need
  //to account for before we can establish a pattern
    //anything ending in 1 is first (except 11th)
    //anything ending in 2 is 2ns (except 12th)
    //anything ending in 3 is 3rd (excep 13th)
    //everything else ends in th.
  //so first, get the last digit in the century. Then check that last digit, and if the 
  //century is one of the outliers to get the final string

function getSuffix(century) {
  let strCent = String(century);
  let lastDigit = Number( strCent[strCent.length - 1] )
  let tensPlace = Number( strCent.slice(strCent.length - 2))
  if ( (lastDigit === 1) && (tensPlace !== 11) ) {
    return 'st'
  } else if ( (lastDigit === 2) && (tensPlace !== 12) ) {
    return 'nd'
  } else if ( (lastDigit === 3 ) && (tensPlace !== 13) ) {
    return 'rd'
  } else {
    return 'th'
  }
}

function century(year) {
  let century = 0;
  if (year % 100 === 0) {
    century = year / 100
  } else {
    century = Math.floor(year / 100) + 1;
  }
  let suffix = getSuffix(century);
  console.log(String(century) + suffix)
  return (String(century) + suffix)
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

//how did LS do it? pretty similar to me, but their way of getting the last digit and the 
//tens place was different from mine. They used modulo to do it. So century % 100 was used
//to see if they had an 11, 12 or 13. Then century % 10 was used to get the last digit.
//Other than that, the logic is pretty similar.