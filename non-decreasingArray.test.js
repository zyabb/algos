const checkPossibility = require('./non-decreasingArray')

describe('check if it could become non-decreasing by modifying at most 1 element. ', function() {
  test('Returns False', () => {
    expect(checkPossibility([4, 2, 1])).toBe(false);
  });
  test('Returns true', () => {
    expect(checkPossibility([4, 2, 3])).toBe(true);
  });
  test('Returns true', () => {
    expect(checkPossibility([3, , 2, 3])).toBe(true);
  });
});
