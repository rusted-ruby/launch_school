//write a function that uses Math.PI to convert degrees to radians

//180 deg = pi rad
//deg = pi / 180 rad
//rad = 180 / pi deg

function rad2deg(rad) {
  deg = rad * (180 / Math.PI);
  console.log(deg);
  return deg
}

rad2deg(Math.PI);
rad2deg(Math.PI / 2);

