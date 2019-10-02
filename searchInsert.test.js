const searchInsert = require('./searchInsert');

describe('Given n, returns the value of Tn.', function() {
  test('Returns 4', () => {
    expect(searchInsert([1, 3, 4, 6], 7)).toBe(4);
  });

  test('Returns 0', () => {
    expect(searchInsert([1, 3, 5, 6], 0)).toBe(0);
  });

  test('Returns 1', () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
  });

  test('Returns 2', () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
  });
});
