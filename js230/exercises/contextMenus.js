document.addEventListener('DOMContentLoaded', function(event) {
  let sub = document.querySelector('#sub');
  document.querySelector('main').addEventListener('contextmenu', function(event) {
    alert('main');
  });
  document.querySelector('#sub').addEventListener('contextmenu', function(event) {
    event.stopPropagation();
    alert('sub');
  })
});