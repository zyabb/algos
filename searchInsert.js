var searchInsert = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  //if there is no target number in the array
  for (let i = 0; i < nums.length; i++) {
    if (target < nums[i]) {
      return i;
    } else if (target > nums[i] && i === nums.length - 1) {
      return i + 1;
    } else {
      continue;
    }
  }
};

module.exports = searchInsert;
