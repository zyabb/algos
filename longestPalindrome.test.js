const longestpalindrome = require('./longestPalindrome')

describe('Find the longest palindromic substring in s', function() {
  test('Returns bab', () => {
    expect(longestpalindrome('babad')).toBe('bab');
  });
  test('Returns bb', () => {
    expect(longestpalindrome('cbbd')).toBe('bb');
  });
});
