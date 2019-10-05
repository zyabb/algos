const containsNearbyDuplicate = require('./containsDuplicateII');

describe('find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.', function() {
  test('Returns True', () => {
    expect(containsNearbyDuplicate([1,2,3,1], 3)).toBe(true);
  });
  test('Returns False', () => {
    expect(containsNearbyDuplicate([1,2,3,1,2,3], 2)).toBe(false);
  });
});
