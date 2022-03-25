const item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount(percent) {
    const discount = this.price * percent / 100;
    console.log(this.price - discount)
    return this.price - discount;
  },
};

item.discount(20)   // should return 40
item.discount(50)   // should return 25
item.discount(25)   // should return 37.5

//the code isn't returning the right discounts. Find out what's wrong
//ok, so what do we want to happen? price is 50, we want an n percent discount on that price
//whenever we pass in a value. 
//Ah, its because we're resetting the price every time we call the function. We need to 
//return a discounted price without resetting the existing price in the process
