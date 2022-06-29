let request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/repos/rails/rails');
request.send();

request.addEventListener('load', event => {
  let request = event.target;
  console.log(request);
})