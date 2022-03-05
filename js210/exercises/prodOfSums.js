/*
this should return the product of the sums of two arrays of numbers. Will it do that?
the actual productOfSums function looks good, assuming total does what we want it to.
problem with total though: we declare sum without an initial value, so its initated as 
undefined. when we add numbers to it, it keeps returning NaN. Even worse, we don't even
have an explict return, so we'll just have undefiend * undefined in product of sums
*/

function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  return sum;
}

console.log(productOfSums([1,2,3], [4,5])) //6 * 9 = 54