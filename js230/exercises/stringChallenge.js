const solution = (s) => {
  let globalCounter = 0;
  let sArr = s.split('');
  for (let i = 0; i < sArr.length; i += 1) {
      let seen = [];
      let localCounter = 0;
      for (let j = i; j < sArr.length;j += 1) {
          let char = sArr[j];
          console.log(char)
          if (seen.includes(char)) {
            console.log('includes char')
              break;
          } else {
            console.log('does not include char')
              seen.push(char);
              localCounter += 1;
              if (localCounter > globalCounter) {
                  globalCounter = localCounter
              }
          }
      }
  }
  return globalCounter
};

console.log(solution('nndNfdfdf'));