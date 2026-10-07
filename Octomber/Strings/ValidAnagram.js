function ValidAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let freqs = {};
  let freqt = {};
  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    if (freqs[ch]) {
      freqs[ch]++;
    } else {
      freqs[ch] = 1;
    }
  }
  for (let j = 0; j < t.length; j++) {
    let ch = t[j];
    if (freqt[ch]) {
      freqt[ch]++;
    } else {
      freqt[ch] = 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    if (freqs[ch] !== freqt[ch]) {
      return false;
    }
  }
  return true;
}
let s = "anagram";
let t = "nagaram";
console.log(ValidAnagram(s,t))