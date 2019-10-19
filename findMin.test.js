const findMIn = require('./findMin');

describe('Finds the minimum element.', function() {
  test('Returns 1', () => {
    expect(findMIn([2, 3, 4, 5, 1])).toBe(1);
  });
  test('Returns 0', () => {
    expect(findMIn([4, 5, 6, 7, 0, 1, 2])).toBe(0);
  });
});
