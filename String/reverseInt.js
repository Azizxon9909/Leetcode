var reverse = function(x) {
    x = Math.sign(x)*parseInt(Math.abs(x).toString().split("").reverse().join(""))
    return (x>=-1*2**31&&x<=(2**31)-1)?x:0
    
};
console.log(reverse(-123));