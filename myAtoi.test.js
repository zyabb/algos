const myAtoi = require('./myAtoi');

describe('Converts string to integer', function() {
  test('Returns 42', () => {
    expect(myAtoi('42')).toBe(42);
  });
  test('Returns 4193', () => {
    expect(myAtoi('4193 with words')).toBe(4193);
  }); 
  test('Returns -42', () => {
    expect(myAtoi('      -42')).toBe(-42);
  });
  test('Returns 0', () => {
    expect(myAtoi('words and 987')).toBe(0);
  });
  test('Returns -2147483648', () => {
    expect(myAtoi('-91283472332')).toBe(-2147483648);
  });
});
