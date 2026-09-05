function sumNumber(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}
// console.log(sumNumber([1, 2, 3, 4, 5]))

//Q2.
function removeVal(nums, val) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[x] = nums[i];
      x++;
    }
  }
  return x;
}
console.log(removeVal([3, 2, 2, 3], 3));
