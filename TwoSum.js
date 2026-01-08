// nums = [2, 7, 11, 15]
// target = 9

function twosum(nums, target) {
  let seen = {};
  for (let i = 0; i < nums.length; i++) {
    // console.log("i :", i, "value :", nums[i]);
    let needed = target - nums[i];


    if (seen[needed] !== undefined) {
      //   console.log("FOUND!");
      return [seen[needed], i];
    }
    seen[nums[i]] = i;
  }
}

console.log(twosum([2, 7, 11, 15], 9));
