var myAtoi = function (s) {
  let y = s.trim().match(/^([-|\+]?\d+)/g)?.[0]??0;
  if (y>2**31-1) {
      return 2**31-1
  } else if(y< -1*2**31) {
    return -1*2**31
  }
  return y
};
console.log(myAtoi("    -2555"));
