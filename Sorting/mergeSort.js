var merge = function (nums1, m, nums2, n) {
  let a = nums1.slice(0, m);
  let b = nums2.slice(0, n);

  return [...a,...b].sort();
};
let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];

console.log(merge(nums1, 3, nums2, 3));
