//create a stack object that has some special methods

function newStack(){
  let stack = [];

  return {
    push(val){
      stack.push(val);
    },
    pop(){
      return stack.pop()
    },
    printStack(){
      if (stack.length > 0) {
        for (let i = stack.length - 1; i >= 0; i -= 1) {
          console.log(stack[i]);
        }
      }
    }
  }
}

let stack = newStack();
stack.push(1)
stack.push(2)
stack.printStack() //2, 1
stack.push(45);
stack.printStack() //45, 2, 1
let stack2 = newStack();
stack2.push(6);
stack2.push(7);
stack2.printStack() //7, 6
stack.pop()
stack.pop()
stack.printStack() //1
stack2.pop()
stack2.printStack() //6
