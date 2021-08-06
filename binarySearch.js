function linearSearch(arr,k) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]==k) {
            return true
        }
    }
    return false
}
let iterativeFunction = function (arr, x) {
   
    let start=0, end=arr.length-1;
    while (start<=end){
  
        let mid=Math.floor((start + end)/2);
   
        if (arr[mid]===x) return true;

        else if (arr[mid] < x) 
             start = mid + 1;
        else
             end = mid - 1;
    }
   
    return false;
}

let arr = [1, 3, 5, 7, 8, 9];
let x = 8;
// console.log(linearSearch(arr,x));

console.log(iterativeFunction(arr,x));
