let request = new XMLHttpRequest();
request.open('POST', 'https://ls-230-web-store-demo.herokuapp.com/v1/products');
request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
request.setRequestHeader('Authorization', 'token AUTH_TOKEN');
let obj = {
  name: "nino's 4 color pen",
  sku: "nino",
  price: 400000,
};
let json = JSON.stringify(obj);
request.send(json)