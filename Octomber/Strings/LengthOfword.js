function lengthofWord(s) {
  let right = s.length - 1;
  let count = 0;
  //ab space hogi end mein to skip
  while (right>=0 && s[right] === " ") {
    right--;
  }
  while (right >= 0 && s[right] !== " ") {
    count++;
    right--;
  }
  return count;
}
console.log(lengthofWord("Pranjal"))