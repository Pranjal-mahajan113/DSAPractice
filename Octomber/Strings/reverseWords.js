function reverseWords(s) {
  return s.trim().split(/\s+/).reverse().join(" ");
}
let s = "  a good   example  ";
// console.log(s.split(" "))

// console.log(s.trim());
// "a good   example"
console.log(reverseWords(s))