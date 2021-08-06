var longestCommonPrefix = function (strs) {
  let arr = [],
    i = 0,
    first = strs[0];
  for (; i < first.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] != first[i]) {
        return first.substr(0, i);
      }
    }
  }
  return first.substr(0, i) ?? "";
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
