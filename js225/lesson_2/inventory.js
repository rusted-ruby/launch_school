//we want an object oriented inventory mgmt system. have at it

function makeItem(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,
    setPrice(price) {
      if (price < 0) {
        console.log("alert: new price can't be negative");
        return
      } else {
        this.price = price;
        console.log(`Set the price of ${this.name} to ${price}`);
      }
    },
    describeProduct() {
      console.log(`Name: ${this.name}\nID: ${this.id}\nPrice: $${this.price}\nStock: ${this.stock}`)
    },
  }
}

let scissors = makeItem(0, "Scissors", 8, 10);
let cDrill = makeItem(1, "Cordless Drill", 15, 45);
cDrill.setPrice(-1)
cDrill.setPrice(200)
scissors.describeProduct();

