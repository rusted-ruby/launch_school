document.addEventListener('DOMContentLoaded', () => {
  let request = new XMLHttpRequest();
  request.open('GET', 'hts://api.github.com/repos/rails/rails')
  request.responseType = 'json';
  request.addEventListener('load', (event) => {
    let data = request.response;
    console.log(request.status);
    console.log(data.open_issues)
  });
  request.addEventListener('error', event => {
    console.log("We're not able to do this!");
  })
  request.send();
})