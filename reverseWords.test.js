const reverseWords = require('./reverseWords')

describe('Given an input string, reverse the string word by word.', function() {
  test('"the sky is blue"', () => {
    expect(reverseWords('the sky is blue')).toBe('blue is sky the');
  });
  test('"the sky is blue"', () => {
    expect(reverseWords('  hello world!  ')).toBe('world! hello');
  });
  test('"the sky is blue"', () => {
    expect(reverseWords('a good   example')).toBe('example good a');
  });
});
