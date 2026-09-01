function removeDuplicate(nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    //i aek aek elemet dekhega
    if (nums[i] > nums[x]) {
      x++;
      nums[x] = nums[i];
    }
  }
  return x + 1;
}
// console.log(removeDuplicate([1, 1, 2, 3, 3, 5]));

function removeElemet(nums, val) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[x] = nums[i];
      x++;
    }
  }
  return x;
}

// function reverseString(s) {
//     return s.split("").reverse().join("")
// }
// console.log(reverseString("helllo"));


function reverseString(s){
    let left =0;
    let right=s.length-1;
    while(left<right){
        let temp=s[left]
        s[left]=s[right];
        s[right]=temp
        left++;
        right--;
    }
    // return s;
    
}
console.log(reverseString( ["h", "e", "l", "l", "o"]))