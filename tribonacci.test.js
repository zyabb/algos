const tribonacci = require('./tribonacci');

describe('Given n, returns the value of Tn.', function() {
  test('Returns 4', () => {
    expect(tribonacci(4)).toBe(4);
  });

  test('Returns 1389537', () => {
    expect(tribonacci(25)).toBe(1389537);
  });
});
