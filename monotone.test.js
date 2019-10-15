const isMonotonic = require('./monotone');

describe('An array is monotonic if it is either monotone increasing or monotone decreasing', function() {
  test('Returns true', () => {
    expect(isMonotonic([1, 2, 2, 3])).toBe(true);
  });
  test('Returns true', () => {
    expect(isMonotonic([6, 5, 4, 4])).toBe(true);
  });
  test('Returns false', () => {
    expect(isMonotonic([1, 3, 2])).toBe(false);
  });
});
