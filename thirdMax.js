const thirdMax = nums => {
  nums.sort((a, b) => b - a);

  let result = [];
  nums.forEach(el => {
    if (!result.includes(el)) result.push(el);
  });
  if (typeof result[2] !== 'undefined') {
    return result[2];
  }
  return result[0];
};

module.exports = thirdMax;
