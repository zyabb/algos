const twoSum = function(nums, target) {
    const seen = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        const diff = target - num;
        if (diff in seen) {
            return [seen[diff], i]
        } else {
            seen[num] = i; 
        }
    }
};

module.exports = twoSum;