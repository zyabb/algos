const rotate = (nums, k) => {
    let arr = new Array(nums.length);
    
    for (let i = 0; i < nums.length; i++) {
        arr[(i+k) % nums.length] = nums[i];
    };
    return arr;
};

module.exports = rotate;
