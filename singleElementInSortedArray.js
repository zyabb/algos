const singleNonDuplicate = nums => {
  let lo = 0;
  let hi = nums.length - 1;
  let mid;
  while (lo < hi) {
    mid = Math.floor((lo + hi) / 2);
    if (mid % 2 != 0) {
      //odd
      if (nums[mid - 1] != nums[mid]) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    } else {
      //even
      if (nums[mid + 1] != nums[mid]) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }
  }
  return nums[lo];
};

module.exports = singleNonDuplicate;
