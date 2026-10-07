function isIsomorphic(s, t) {
  let mapSTot = {};
  let mapTTos = {};
  for (let i = 0; i < s.length; i++) {
    if (!mapSTot[s[i]] && !mapTTos[t[i]]) {
      mapSTot[s[i]] = t[i];
      mapTTos[t[i]] = s[i];
    } else if (mapTTos[t[i]] !== s[i] || mapSTot[s[i]] !== t[i]) {
      return false;
    }
  }
  return true;
}
