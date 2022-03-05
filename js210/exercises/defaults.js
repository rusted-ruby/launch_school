/*
both of these functions have functionality that sets defaults for arguments that aren't 
passed in. there are problems for certain inputs though.
Well, we can break all of this by passing in negative numbers, or strings. We don't
do any processing to ensure that the values we pass in are actually numbers. 

The other problem I didn't get is that zero is a falsey value in JS. This means that, say, if
we wanted the service charge to be 0, we'd trip the if statement and assign the default 
service charge of 0.1
*/

function processOrder(price, quantity, discount, serviceCharge, tax) {
  if (!quantity) {
    quantity = 1;
  }

  if (!discount) {
    discount = 0;
  }

  if (!serviceCharge) {
    serviceCharge = 0.1;
  }

  if (!tax) {
    tax = 0.15;
  }

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

processOrder(100);      // 126.5

function processOrder2(price, quantity, discount, serviceCharge, tax) {
  quantity = quantity || 1;
  discount = discount || 0;
  serviceCharge = serviceCharge || 0.1;
  tax = tax || 0.15;

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}