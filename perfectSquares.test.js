const numSquares = require('./perfectSquares');

describe('Аind the least number of perfect square numbers which sum to n.', function() {
  test('Returns 3', () => {
    expect(numSquares(12)).toBe(3);
  });
  test('Returns 3', () => {
    expect(numSquares(13)).toBe(2);
  });
});
