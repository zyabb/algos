const rotate = require('./rotateArray');

describe('The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. ', function() {
  test('Returns [5,6,7,1,2,3,4]', () => {
    expect(rotate([1,2,3,4,5,6,7], 3)).toEqual([5,6,7,1,2,3,4]);
  });
  test('Returns [3, 99, -1, -100]', () => {
    expect(rotate([-1,-100,3,99], 2)).toEqual([3,99,-1,-100]);
  });
});
