function targetReturn(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
}
console.log(targetReturn([10, 25, 7, 40, 15], 40));

function targetShirt(nums, target) {
  let low = 0;
  let high = nums.length-1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
}
console.log(targetShirt([-1, 0, 3, 5, 9, 12], 9));


function TargetedequalTo(nums){
    let 
}