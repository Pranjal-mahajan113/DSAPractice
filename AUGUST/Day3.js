function largest(arr) {
  if (arr.length === 0) return null;
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number" || !Number.isFinite(arr[i])) {
      return false;
    }
    if (arr[i > max]) {
      max = arr[i];
    }
  }
  return max;
}
console.log(largest([3, 1, 2]));
console.log(largest([]));

function binarySearch(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));


function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2)); // -1