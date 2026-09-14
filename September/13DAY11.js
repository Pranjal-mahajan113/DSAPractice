function sumofnumbers(n) {
  if (n === 1) {
    return 1;
  }
  let last = n;
  let answer = sumofnumbers(n - 1);
  return last + answer;
}
console.log(sumofnumbers(5));

function sumofarraynum(nums, n) {
  if (n === 1) {
    return nums[0];
  }
  let last = nums[n - 1];
  let answer = sumofarraynum(nums, n - 1);
  return last + answer;
}
let nums = [1, 2, 3, 4, 5];
console.log(sumofarraynum(nums, nums.length));

var searchInsert = function(nums, target) {
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