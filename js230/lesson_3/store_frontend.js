document.addEventListener('DOMContentLoaded', () => {
  let store = document.getElementById('store');
  
  let request = new XMLHttpRequest();
  request.open('GET', 'https://ls-230-web-store-demo.herokuapp.com/products');

  request.addEventListener('load', event => store.innerHTML = request.response);
  request.send();
  
  store.addEventListener('click', event =>  {
    let target = event.target;
    if (target.tagName !== 'A') {
      return;
    }
    
    event.preventDefault();
    
    let request = new XMLHttpRequest();

    request.open('GET', `https://ls-230-web-store-demo.herokuapp.com${target.getAttribute('href')}`);

    request.addEventListener('load', event => store.innerHTML = request.response);
    request.send();
  });

  document.addEventListener('submit', event => {
    event.preventDefault();
    form = event.target
    console.log('form attribute', form.getAttribute('action'));
    let request = new XMLHttpRequest();
    let data = new FormData(form);
    //the form attribute contains the path to the product the form is displaying. 
    //need to dig around the html that's being sent in order to see it.
    request.open('POST', `https://ls-230-web-store-demo.herokuapp.com${form.getAttribute('action')}`);
    request.setRequestHeader('Authorization', 'token AUTH_TOKEN');
    request.addEventListener('load', event => store.innerHTML = request.response);
    request.send(data);
  })
});