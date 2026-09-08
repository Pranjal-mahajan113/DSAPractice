function fun(n) {
  if (n === 1) return 1;
  let ans = fun(n - 1);
  return ans + n;
}
// console.log(fun(4));


var fib = function(n) {
    
    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    return fib(n - 1) + fib(n - 2);

};
console.log(fib(3))