const majorityElement = require('./majorityElement');

describe('The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. ', function() {
  test('Returns 3', () => {
    expect(majorityElement([3,2,3])).toBe('3');
  });
  test('Returns 2', () => {
    expect(majorityElement([2,2,1,1,1,2,2])).toBe('2');
  });
});
