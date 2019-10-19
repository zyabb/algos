const duplicateZeros = require('./duplicateZeros');

describe('Finds the minimum element.', function() {
  test('Returns 1', () => {
    expect(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0])).toEqual([
      1,
      0,
      0,
      2,
      3,
      0,
      0,
      4,
    ]);
  });
  test('Returns 0', () => {
    expect(duplicateZeros([4, 5, 6, 7, 0, 1, 2])).toEqual([
      4,
      5,
      6,
      7,
      0,
      0,
      1,
    ]);
  });
});
