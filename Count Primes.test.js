const countPrimes = require('./Count Primes');

describe('Count the number of prime numbers less than a non-negative number, n.', function() {
  test('Input 10, return 4', () => {
    expect(countPrimes(10)).toBe(4);
  });
  test('Input 499979, return 41537', () => {
    expect(countPrimes(499979)).toBe(41537);
  });
});
