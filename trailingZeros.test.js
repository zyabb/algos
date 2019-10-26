const trailingZeroes = require('./trailingZeros');

describe('Counts the trailings zeros of factorial', function() {
  test('Returns 1249 ', () => {
    expect(trailingZeroes(5000)).toBe(1249);
  });
  test('Returns 7 ', () => {
    expect(trailingZeroes(30)).toBe(7);
  });
  test('Returns 2499999997 ', () => {
    expect(trailingZeroes(10000000000)).toBe(2499999997);
  });
  test('Returns 1 ', () => {
    expect(trailingZeroes(5)).toBe(1);
  });
});
