function getFirstNFibs(n) {
  let fibs = []
  for (let i = 1; i <= n; i += 1) {
      fibs.push(getNthFib(i));
  }
  return fibs
}

//start at 1 and 1. 1 + 1 is 2. then 1  +2 is 3. then 2 + 3 is 5
function getNthFib(n) {
  if (n === 1 || n === 2 ) {
      return 1 
  }
  return getNthFib(n-1) + getNthFib(n-2)
}

console.log(getFirstNFibs(6))