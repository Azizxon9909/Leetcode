var isAnagram1 = function (s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
};
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let objS = {};
  let objT = {};

  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (objS[element]) {
      objS[element]++;
    } else {
      objS[element] = 1;
    }
  }
  for (let i = 0; i < t.length; i++) {
    const element = t[i];
    if (objT[element]) {
      objT[element]++;
    } else {
      objT[element] = 1;
    }
  }
  return Object.keys(objS).every(c => objT[c] === objS[c])
};

console.log(isAnagram("read", "dear"));
