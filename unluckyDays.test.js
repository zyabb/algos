const unluckyDays = require('./unluckyDays');

describe('Finds the number of Friday 13th in the given year.', function() {
  test('Returns 3', () => {
    expect(unluckyDays(2015)).toBe(3);
  });
  test('Returns 1', () => {
    expect(unluckyDays(1986)).toBe(1);
  });
});
