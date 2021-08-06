function uniqSort(nums) {
  let result = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (!result.includes(nums[i])) {
      result.push(nums[i]);
    }
  }
  result.sort((a, b) => a - b);
  return result;
}

console.log(uniqSort([2, 1, 2, 9, 15, 2, 7, 1]));
