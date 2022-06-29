function after1s(x, ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, ms);
  });
}

async function test(input) {
  const a = await after1s(2, 2000);
  const b = await after1s(3, 3000);
  return input * (a) * (b);
}

test(3).then((value) => console.log(value)) //18