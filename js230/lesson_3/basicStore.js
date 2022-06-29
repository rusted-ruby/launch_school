//this js will issue a post request to create a new product in our store
document.addEventListener("DOMContentLoaded", () => {
  let request = new XMLHttpRequest();
  request.open('POST', 'https://ls-230-web-store-demo.herokuapp.com/v1/products');
  request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
  request.setRequestHeader('Authorization', 'token AUTH_TOKEN');
  let data = {
    name: "the bluest of pens: 2",
    price: 300,
    sku:"tbop2"
  };
  let json = JSON.stringify(data);
  request.send(json);
  request.addEventListener('load', () => {
    console.log("request sent!");
  })
})