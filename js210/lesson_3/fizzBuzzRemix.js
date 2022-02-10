function multiplesOfThreeAndFive() {
  for (let i = 1; i <= 100; i ++) {
    let str;
    if (i % 5 === 0 && i % 3 === 0) {
      str = String(i) + '!'
      console.log(str)
    } else if (i % 5 === 0 || i % 3 === 0) {
      str = String(i)
      console.log(str)
    }
  }
}

multiplesOfThreeAndFive()