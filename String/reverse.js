var reverseString = function (s) {
    for (let i = 0; i < s.length / 2; i++) {
        let temp = s[i];
        s[i] = s[s.length - 1 - i];
        s[s.length - 1 - i] = temp;
        // [ s[i], s[s.length - 1 - i] ] =  [ s[s.length - 1 - i],  s[i] ]
    }
    return s;
};
let s = ["h", "e", "l", "l", "o"];
console.log(reverseString(s));
