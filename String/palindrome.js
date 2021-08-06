var isPalindrome = function (s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    for (let j = 0; j < s.length/2; j++) {
       if (s[j]!==s[s.length-1-j]) {
           return false
       }     
    }
    return true
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));
