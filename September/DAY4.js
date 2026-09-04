function missingNumber(nums) {
  for (let i = 0; i <= nums.length; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
}
console.log(missingNumber([3, 0, 1]));

//Solution--2
function missingNumber2(nums) {
  let n = nums.length;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;
  for (let i = 0; i < nums.length; i++) {
    actualSum += nums[i];
  }
  return expectedSum - actualSum;
}
console.log(missingNumber2([3, 0, 1, 2]));

//Q2
function singleNumber(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result = result ^ nums[i];
  }
  return result;
}

console.log(singleNumber([1,2,2,1,4,4,5]))