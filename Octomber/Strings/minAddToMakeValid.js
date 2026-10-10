function minAddToMakeValid(s) {
  let open = 0;
  let add = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      open++;
      open--;
    } else {
      add++;
    }
  }
  return open + add;
}
