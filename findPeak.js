const findPeakElement = nums => {
  return search(nums, 0, nums.length - 1);
};

const search = (nums, l, r) => {
  if (l === r) {
    return l;
  }
  const middle = Math.floor((l + r) / 2);

  if (nums[middle] > nums[middle + 1]) return search(nums, l, middle);
  return search(nums, middle + 1, r);
};

module.exports = findPeakElement;
