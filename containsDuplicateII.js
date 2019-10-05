
const containsNearbyDuplicate = (nums, k) =>  {
    let seen = {};
    for (let i = 0; i < nums.length; i++) {
       if (nums[i] in seen && k >= i - seen[nums[i]]) {
            return true;
       } else {
           seen[nums[i]] = i;
       }
    };
    return false;
};

module.exports = containsNearbyDuplicate;
