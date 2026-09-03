function moveZeroend(nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[x] = nums[i];
      x++;
    }
  }
  while (x < nums.length) {
    nums[x] = 0;
    x++;
  }
}
// console.log(moveZeroend([0, 1, 0, 3, 12]));

let nums = [0, 1, 0, 3, 12, 0, 9, 2];

moveZeroend(nums);

console.log(nums);

function findMaxConsecutiveOnes(nums) {
  let currentCount = 0;
  let maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentCount++;
      if (currentCount > maxCount) {
        maxCount = currentCount;
      }
    } else {
      currentCount = 0;
    }
  }
  return maxCount;
}
console.log(findMaxConsecutiveOnes([1, 1, 1, 0, 1, 1, 1]));
