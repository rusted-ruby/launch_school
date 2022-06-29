document.addEventListener('DOMContentLoaded', () => {
  let request = new XMLHttpRequest();
  request.open('GET', 'htps://api.github.com/repos/rails/rails');
  request.responseType = 'json'
  request.addEventListener('load', () => {
    console.log("response status ", request.status);
    console.log("response number of issues ", request.response.open_issues)
  });
  request.addEventListener('error', () => {
    console.log("we hit an error!")
  })
  request.send();
  
})