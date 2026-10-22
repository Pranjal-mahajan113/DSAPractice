// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

let nums = [1,3,5,6];
let i =0;
let  searchInsert = function(nums, target) {
    for(i =0; i<nums.length;i++){
        if(nums[i] === target){
            return i ;
        }
        else if(nums[i] >target) {
            return i ;
        }
    }
    return i ;
};

console.log(searchInsert(nums, 5)); // 2
console.log(searchInsert(nums, 2)); // 1
console.log(searchInsert(nums, 7));
console.log(searchInsert(nums, 4));  