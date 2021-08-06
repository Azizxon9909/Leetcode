var countAndSay = function (n) {
    if (n == 1) return "1"

    return say(countAndSay(n - 1))
};

function say(num) {
    let arr = [num[0]]
    for (let i = 1; i < num.length; i++) {
        if (arr[arr.length-1].includes(num[i])) {
            arr[arr.length-1]+=num[i]
        }else{
            arr.push(num[i])
        }
    }
    return arr.map(x=>x.length+x[0]).join("")
}
console.log(countAndSay(4));
