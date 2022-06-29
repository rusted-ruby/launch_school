document.addEventListener('DOMContentLoaded', () => {
  let store = document.getElementById('store');
  
  let request = new XMLHttpRequest();
  request.open('GET', 'https://ls-230-web-store-demo.herokuapp.com/products');

  request.addEventListener('load', event => store.innerHTML = request.response);
  request.send();
  
  store.addEventListener('click', event => {
    let target = event.target;
    if (target.tagName !== 'A') {
      return;
    }
    
    event.preventDefault();
    
    let request = new XMLHttpRequest();
    request.open('GET', 'https://ls-230-web-store-demo.herokuapp.com' + target.getAttribute('href'));

    request.addEventListener('load', event => store.innerHTML = request.response);
    request.send();    
  });

  store.addEventListener('submit', event => {
    //don't want to actually submit the form
    event.preventDefault();
    let form = document.querySelector('form');

    //open a new request to the proper URL
    let request = new XMLHttpRequest();
    request.open('POST', 'https://ls-230-web-store-demo.herokuapp.com' + form.getAttribute('action'));
    request.setRequestHeader('Authorization', 'token AUTH_TOKEN');
    //process the (eventual) response
    request.addEventListener('load', () => {
      if (request.status === 201) {
        console.log("the product was updated");
      }
      store.innerHTML = request.response
    });

    //serialize form data and send request
    let data = new FormData(form);
    request.send(data);
  })


});