/*
use OLOO to create an anonymous user. 

I'll need to create an Accout prototype object that can be the prototype for our anons. 
The Account prototype should have the following methods
  init, to actually set properties on the new object.
  reanonymize: generates a new display name if the passwrod is valid
  resetPasswrod: resets the password if we can.

some thoughts... I've got some helper methods in the prototype object that make things easier
(like passwordIsValid), but that function is exposed to any object that we create and it 
probably shouldn't be... Is there a better way to handle this besides hard coding password
validation into EVERY function that needs it? Can I have "private" methods in prototype 
objects? 

This is tough too: I've got data stored in properties, but I also have functions named after
those properties with the end result that one of them is shadowed and can't be accessed...
How can I do this? I'm stuck.

AH, so LS has got something else up their sleeve here... they define the Account object
as an IIFE! So its a function that executes immediately. It begins by outlining private 
data (like the user's data and the "helper functions" that the object can use). Then the IIFE
RETURNS the object that will be used as the Account prototype object. The methods in the object
have access to the private data via the closure that's formed, but the Object itself ONLY 
HAS THE PROPERTIES WE ARE OKAY WITH HAVING EXPOSED. So its just a matter of reorganization. 

You an also make it so the account function is NOT immediately executed so that it can be used
to create multiple objects. So the true power of OLOO relies in creating functions that can
build prototype objects with private data, then creating objects off of those prototypes. 
*/
let Account = (function(){

  //private data is defined here to be kept in the closure
  let userFirstName;
  let userLastName;
  let userEmail;
  let userPw;

  function passwordIsValid(inputPassword){
    if (inputPassword === userPw) {
      return true
    } else {
      return false
    }
  }

  function anonymize(){
    function randomNumber(min, max) {
      return Math.round(Math.random() * (max - min)) + min;
    }
    let str = ''
    for (let i = 0; i <= 15; i += 1) {
      let num = randomNumber(0,61);
      str += "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890"[num]
    }
    return str
  }

  //actually return the object to be used as a prototype
  return {
    init(email, password, firstName, lastName){
      userEmail = email;
      userPw = password;
      userFirstName = firstName;
      userLastName = lastName;
      this.displayName = anonymize()
      return this
    },
    reanonymize(inputPassword){
      if (passwordIsValid(inputPassword)) {
        this.displayName = anonymize()
        return true
      }
    },
    firstName(pw){
      if (passwordIsValid(pw)) {
        return userFirstName
      }
      return "Invalid Password"
    },
    lastName(pw){
      if (passwordIsValid(pw)){
        return userLastName
      }
      return "Invalid Password"
    }, 
    email(pw){
      if (passwordIsValid(pw)){
        return userEmail
      }
      return "Invalid Password"
    },
    resetPassword(oldPw, newPw){
      if (passwordIsValid(oldPw)) {
        userPw = newPw
        return true
      }
      return "Invalid Password"
    }
  }

});



let fooBar = Object.create(Account()).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
console.log("old display name", displayName);
fooBar.reanonymize('abc');                         // returns true
console.log("new display name", fooBar.displayName)
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account()).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.email('abc'));                  // logs 'Invalid Password'