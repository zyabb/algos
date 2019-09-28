const reverseParentheses = require('./Reverse Substrings Between Each Pair of Parentheses');

describe('Reverse Substrings Between Each Pair of Parentheses', function() {
  test("Reverse substring '(abcd)' to 'dcba'", () => {
    expect(reverseParentheses('(abcd)')).toBe('dcba');
  });

  test("Reverse substring '(u(love)i)' to 'iloveu'", () => {
    expect(reverseParentheses('(u(love)i)')).toBe('iloveu');
  });
});
