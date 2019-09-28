const searchMatrix = require('./Search a 2D Matrix');

describe('Return true if the number is found', function() {
  test('Finds 3 in the array', () => {
    expect(
      searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 3)
    ).toBe(true);
  });

  test('Finds 1 in', () => {
    expect(searchMatrix([[1]], 1)).toBe(true);
  });
});
