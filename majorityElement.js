var majorityElement = function(nums) {
    let seen = {}
    nums.forEach(el => {
        seen[el] = (seen[el] || 0) + 1;
    });
    
    const keys = Object.keys(seen);    
    for (let i = 0; i < keys.length; i++) {
        let el = keys[i];
        if (seen[el] > nums.length / 2) {
            return el;
        }
    }
};

module.exports = majorityElement;
