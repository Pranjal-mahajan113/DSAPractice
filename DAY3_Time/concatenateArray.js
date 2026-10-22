let getconcation = function () {
  let n = nums.length;
  let ans = new Array(2 * n);
  for (let i = 0; i < n; i++) {
    ans[i] = nums[i];
    ans[i + n] = nums[i];
  }
  return ans;
};
let nums = [1,2,1];
let result = getconcation(nums);    // call the function with nums
console.log(result);  