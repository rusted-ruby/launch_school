const testPromise = () => Promise.resolve("1");

function test1() {
  testPromise().then((result) => console.log(result)); //second
  console.log("2"); //first
}

async function test2() {
  console.log(await testPromise()); //third
  console.log("3"); //last
}

test1();
test2();