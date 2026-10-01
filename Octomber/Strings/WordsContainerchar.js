function findWordsContaining(words, x) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      result.push(i);
    }
  }
  return result;
}
let words = ["abc", "bcd", "aaaa", "cbc"];
let x = "a";
console.log(findWordsContaining(words,x))