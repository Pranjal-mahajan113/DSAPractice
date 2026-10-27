function reverse(s) {
  let result = [];
  for (let i = s.length - 1; i >= 0; i--) {
    result.push(s[i]);
  }
  return result.join("")
}
s = "Pranjal";
console.log(reverse(s));
