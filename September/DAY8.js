function fun(n) {
  if (n === 1) return 1;
  let ans = fun(n - 1);
  return ans + n;
}
console.log(fun(4));
