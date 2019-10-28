const findErrorNums = nums => {
  nums.sort((a, b) => a - b);
  let dup = -1;
  let miss = 1;

  for (let index = 1; index < nums.length; index++) {
    if (nums[index] === nums[index - 1]) {
      dup = nums[index];
    } else if (nums[index] > nums[index - 1] + 1) {
      miss = nums[index - 1] + 1;
    }
  }
  return [dup, nums[nums.length - 1] !== nums.length ? nums.length : miss];
};

module.exports = findErrorNums;
