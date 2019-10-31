const romanToInt = require('./romanToInteger');

describe('Given a roman numeral, convert it to an integer', function() {
  test('Return 3', () => {
    expect(romanToInt('III')).toBe(3);
  });
  test('Return 4', () => {
    expect(romanToInt('IV')).toBe(4);
  });
  test('Return 9', () => {
    expect(romanToInt('IX')).toBe(9);
  });
  test('Return 58', () => {
    expect(romanToInt('LVIII')).toBe(58);
  });
  test('Return 1994', () => {
    expect(romanToInt('MCMXCIV')).toBe(1994);
  });
});
