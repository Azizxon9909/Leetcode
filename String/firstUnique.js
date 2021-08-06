var firstUniqChar1 = function (s) {
  let arr = [];
  for (let i = 0; i < s.length + 1; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        arr.push(s[i]);
      }
    }
  }
  for (let k = 0; k < s.length; k++) {
    if (!arr.includes(s[k])) {
      return k;
    }
  }
  return -1;
};
var firstUniqChar2 = function (s) {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (obj[element]) {
      obj[element]++;
    } else {
      obj[element] = 1;
    }
  }
  for (const key in obj) {
    if (obj[key]==1) {
      return s.indexOf(key)
    }
  }
};
var firstUniqChar = function(s) {
  for(let i = 0; i < s.length; i++){
      if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
  }
  return -1;
};
console.log(firstUniqChar("ljljdee"));
