function sumofnumbers(n) {
  if (n === 1) {
    return 1;
  }
  let last = n;
  let answer = sumofnumbers(n - 1);
  return last + answer;
}
console.log(sumofnumbers(5));
