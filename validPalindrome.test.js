const validPalindrome = require('./validPalindrome');

describe('Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.', function() {
  test('Return True', () => {
    expect(validPalindrome('aba')).toBe(true);
  });
  test('Return True', () => {
    expect(validPalindrome('abca')).toBe(true);
  });
});
