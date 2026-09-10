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
