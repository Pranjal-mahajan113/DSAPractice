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
// console.log(removeVal([3, 2, 2, 3,1], 3));

// Q3
function reverseString(s) {
  let left = 0;
  let right = s.length - 1; //5-1=4 4th position of array is ->o
  while (left < right) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
  return s;
}
// console.log(reverseString(["h", "e", "l", "l", "0"]));

//Q4
function moveZeroEnd(nums) {
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
let nums = [0, 1, 0, 3, 12];
moveZeroEnd(nums);
// console.log(nums);

//Q6
function maximumConsecive(nums) {
  let count = 0;
  let maxcount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
      maxcount = count;
    } else {
      count = 0;
    }
  }
  return maxcount;
}
// console.log(maximumConsecive([1, 1, 0, 1, 1, 1]));

// Q7
function missingNumber(nums) {
  let n = nums.length;
  let actualnum = 0;
  let expectedSum = (n * (n + 1)) / 2;
  for (let i = 0; i < nums.length; i++) {
    actualnum += nums[i];
  }
  return expectedSum - actualnum;
}
console.log(missingNumber([3, 0, 1]));

//Q8
function singleNumber(nums){
    let result=0;
    for(let i=0;i<nums.length;i++){
        result= result^nums[i]
    }
    return result;
}
console.log(singleNumber([4,1,2,1,2]))

//9->Merge sorted array
