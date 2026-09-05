function removeDuplicate(nums) {
  // x = last unique element ki position track karega
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    // i = array ke har element ko one by one check karega
    if (nums[i] > nums[x]) {
      x++;
      nums[x] = nums[i];
    }
  }
  return x + 1;
}
console.log(removeDuplicate([1, 1, 2, 3, 3, 5]));

function removeElemet(nums, val) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    // Agar current element val ke equal nahi hai,
    // to ye valid element hai aur ise rakhna hai
    if (nums[i] !== val) {
      // Valid element ko x wali position par rakho
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

function reverseString(s) {
  // left = array ke starting index par

  let left = 0;
  // right = array ke last index par

  let right = s.length - 1;
  // Jab tak left aur right cross/mil nahi jaate,
  // tab tak characters swap karte rahenge
  while (left < right) {
    // left wale character ko temporarily save karo

    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
  // return s;
}
console.log(reverseString(["h", "e", "l", "l", "o"]));
