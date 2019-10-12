const findPeak = require('./findPeak');

describe('Returns a peak element and return its index', function() {
  test('Finds 3 in the array', () => {
    expect(findPeak([1, 2, 3, 1])).toBe(2);
  });

  test('Finds 3 in the array', () => {
    expect(
      findPeak([1, 2, 1, 3, 5, 6, 4]) === 1 ||
        findPeak([1, 2, 1, 3, 5, 6, 4]) === 5
    );
  });
});
