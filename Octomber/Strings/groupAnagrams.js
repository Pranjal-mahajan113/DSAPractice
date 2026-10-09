function groupAnagrams(strs) {
  let groups = {};
  for (let i = 0; i < strs.length; i++) {
    let str = strs[i];
    let sorted = str.split("").sort().join("");
    if (groups[sorted]) {
      groups[sorted].push(str);
    } else {
      groups[sorted] = [str];
    }
  }
  return Object.values(groups);
}

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
