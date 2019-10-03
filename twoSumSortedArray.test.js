const twoSum = require('./twoSumSortedArray');

describe('The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. ', function() {
  test('Returns [1, 2]', () => {
    expect(twoSum([2,7,11,15], 9)).toEqual([1, 2]);
  });
  test('Returns [3, 4]', () => {
    expect(twoSum([2,7,11,15], 26)).toEqual([3, 4]);
  });
});
