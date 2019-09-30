const twoSum = require('./twoSum');

describe('Returns indices of the two numbers such that they add up to a specific target.', function() {
    test('Returns [0, 1]', () => {
      expect(twoSum([2,7,11,15], 9)).toEqual([0, 1]);
    });
    test('Returns [0, 2]', () => {
        expect(twoSum([2,7,11,15], 13)).toEqual([0, 2]);
      });
  });
  