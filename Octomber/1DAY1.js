// function twoSum(numbers, target) {
//   let i = 0;
//   let j = numbers.length - 1;
//   while (i < j) {
//     let sum = numbers[i] + numbers[j];
//     if (sum === target) {
//       return [i + 1, j + 1];
//     }
//     if (sum < target) {
//       i++;
//     } else {
//       j--;
//     }
//   }
// }

var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};

let nums = [2, 3, 4, 5, 6, 7, 8];
let target = 7;
console.log(searchInsert(nums, target));
