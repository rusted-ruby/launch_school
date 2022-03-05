//write a make car function that works like this

function makeCar(rate, slow) {
  return {
    speed: 0,
    rate,
    brakeRate: slow,
    accelerate() {
      this.speed += this.rate;
    },
    brake() {
      let speed = this.speed;
      let brake = this.brakeRate;
      if (speed - brake < 0) {
        this.speed = 0;
      } else {
        this.speed -= this.brakeRate;
      }
    },
  };
}

let sedan = makeCar(8,6);
sedan.accelerate();
console.log(sedan.speed);
sedan.brake();
sedan.brake();
console.log(sedan.speed);

let coupe = makeCar(12, 8);
coupe.accelerate();
console.log(coupe.speed)
coupe.brake();
console.log(coupe.speed)

let spaceship = makeCar(400, 0);
spaceship.accelerate();
spaceship.accelerate();
console.log(spaceship.speed);
spaceship.brake();
console.log(spaceship.speed);