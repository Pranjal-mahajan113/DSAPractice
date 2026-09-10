function sumOfarray(nums, n) {
  if (n === 1) {
    return nums[0];
  }
  let last = nums[n - 1];
  let answer = sumOfarray(nums, n - 1);
  return last + answer;
}
let nums = [5, 7, 9, 2];
console.log(sumOfarray(nums, nums.length));

function sumOfNumbers(n) {
  if (n === 1) {
    return 1;
  }

  let last = n;
  let answer = sumOfNumbers(n - 1);

  return last + answer;
}

console.log(sumOfNumbers(5));

function sumOfoddNumbers(nums, n) {
  if (n === 1) {
    if (nums[0] % 2 !== 0) {
      return nums[0];
    } else {
      return 0;
    }
  }
  let last = nums[n - 1];
  let answer = sumOfoddNumbers(nums, n - 1);
  if (last % 2 !== 0) {
    return last + answer;
  } else {
    return answer;
  }
}

function factorialNumber(n){
  if(n===1){
    return 1;
  }
  let last=n;
  let answer=factorialNumber(n-1)
  return last * answer;

}
console.log(factorialNumber(5))
function isPowerOfTwo(n) {
    // Base case
    if (n === 1) {
        return true;
    }

    // Agar 2 se divide nahi ho raha
    if (n % 2 !== 0) {
        return false;
    }

    // Smaller problem
    let answer = isPowerOfTwo(n / 2);

    return answer;
}

console.log(isPowerOfTwo(8));  // true
console.log(isPowerOfTwo(10)); // false
console.log(isPowerOfTwo(16)); // true