function sumOfNumbers(n) {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 !== 0) {
      sum += n[i];
    }
  }
  return sum;
}
n = [1, 2, 3, 6];
console.log(sumOfNumbers(n));
