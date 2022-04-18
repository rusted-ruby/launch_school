let id;
let focusedTextField;
document.addEventListener('DOMContentLoaded', () => {
  let textField = document.querySelector('.text-field');

  //focus the text field and add a cursor when the user clicks
  textField.addEventListener('click', event => {
    event.stopPropagation();
    textField.classList.add('focused');
    focusedTextField = textField;
    //only set the interval once
    if (!id) {
      id = setInterval(() => textField.classList.toggle('cursor'), 500);
    }
  });
});

//remove the focus / cursor when a user clicks the input boc
document.addEventListener('click', event => {
  clearInterval(id)
  if (focusedTextField) {
    focusedTextField.classList.remove('focused');
    focusedTextField.classList.remove('cursor');
  }
});

//display keyboard input if the textField has the focused class
document.addEventListener('keydown', e => {
  if (focusedTextField) {
    let newKey = e.key;
    let content = document.querySelector('.content');
    let currentText = content.textContent
    if (newKey === 'Backspace') {
      content.textContent = currentText.slice(0, currentText.length - 1);
    } else {
      content.textContent = currentText.concat(newKey)
    }
    
  }
})
