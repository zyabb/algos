const containsNearbyDuplicate = (nums, k) =>  {
    for (let i = 0; i < nums.length; i++) {
        let until = i + k;
        for (let j = i + 1; j <= until; j++) {
            if (nums[i] === nums[j]) {
                return true;
            };
        };
    };
    return false;
};

module.exports = containsNearbyDuplicate;
