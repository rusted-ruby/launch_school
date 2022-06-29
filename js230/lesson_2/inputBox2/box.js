document.addEventListener("DOMContentLoaded", function() {
  let textField = document.querySelector('.text-field');
  let content = document.querySelector('.content');
  let cursorId;
  let intervalSet = false;
  textField.addEventListener('click', clickEvent => {
    //prevent the focused class from getting removed during bubbling
    clickEvent.stopPropagation();

    //add focused class to the text box
    textField.classList.add('focused');

    //add cusor to the text box
    if (!intervalSet)
    cursorId = setInterval(function() {
      textField.classList.toggle('cursor');
    }, 500)
    intervalSet = true;
  })

  document.addEventListener('click', function() {
    textField.classList.remove('focused');
    textField.classList.remove('cursor');
    clearInterval(cursorId);
    intervalSet = false;
  })

  document.addEventListener('keyup', keyEvent => {
    if (textField.classList.contains('focused')) {
      if (keyEvent.key === 'Backspace') {
        content.textContent = content.textContent.slice(
          0, 
          content.textContent.length - 1
        )
      } else if (keyEvent.key.length === 1) {
        content.textContent = content.textContent + keyEvent.key;
      }
    }
  })
})