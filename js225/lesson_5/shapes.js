let shape = {
  getType(){
    console.log(this.type)
  }
};

function Triangle(a, b, c){
    this.a = a,
    this.b = b,
    this.c = c,
    this.type = "triangle"
  }

Triangle.prototype = shape;

shape.getPerimeter = function getPerimeter(){
  console.log(this.a + this.b + this.c)
}
console.log(shape);
console.log(Triangle.prototype)

let t = new Triangle(3, 4, 5);
console.log(t.constructor);                 // Triangle(a, b, c)
console.log(shape.isPrototypeOf(t));        // true
t.getPerimeter();              // 12
t.getType();                   // "triangle"