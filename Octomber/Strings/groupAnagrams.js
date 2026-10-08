function groupAnagrams(strs) {
  let groups = {};
  for (let i = 0; i < strs.length; i++) {
    let str = strs[i];
    let sortedStr = str.split("").sort().join("");
    if (!groups[sortedStr]) {
      groups[sortedStr] = [strs[i]];
    } else {
      groups[sortedStr].push(strs[i]);
    }
  }

  return Object.values(groups);
}
