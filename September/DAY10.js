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
