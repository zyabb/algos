const reverseFactorial = require('./reverseFactorial');

describe('Given the result of factorial of a number, returns the number', function() {
  test('Returns 5 ', () => {
    expect(reverseFactorial(120)).toBe(5);
  });
  test('Returns error ', () => {
    expect(reverseFactorial(150)).toBe('error');
  });
  test('Returns 10 ', () => {
    expect(reverseFactorial(3628800)).toBe(10);
  });
});
