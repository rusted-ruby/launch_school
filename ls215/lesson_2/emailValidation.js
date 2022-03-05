/*
check if an email is valid according to the following rules:
  there must be one @
  left of @ needs one or more alphanumeric chars
  right of @ needs two pieces with a . between each piece. each piece can have alphabetics only

  can use a regex for this: see if there is a match in the string
*/

function isValidEmail(email) {
  //need the parentheses after the @ so that we can match on mx.baz.com.ph emails
  //ith multiple dots. 
  let regex = /^[a-z0-9A-Z]+@([a-zA-Z]+\.)+[a-zA-Z]+$/
  let result = !!email.match(regex);
  console.log(result);
  return result
}

isValidEmail('Foo@baz.com.ph');          // returns true
isValidEmail('Foo@mx.baz.com.ph');       // returns true
isValidEmail('foo@baz.com');             // returns true
isValidEmail('foo@baz.ph');              // returns true
isValidEmail('HELLO123@baz');            // returns false
isValidEmail('foo.bar@baz.to');          // returns false
isValidEmail('foo@baz.');                // returns false
isValidEmail('foo_bat@baz');             // returns false
isValidEmail('foo@bar.a12');             // returns false
isValidEmail('foo_bar@baz.com');         // returns false
isValidEmail('foo@bar.....com');         // returns false