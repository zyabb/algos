const judgeCircle = require('./robotReturnToOrigin');

describe('Given two strings s and t, determine if they are isomorphic', function() {
  test('Returns true ', () => {
    expect(judgeCircle('UD')).toBe(true);
  });
  test('Returns false ', () => {
    expect(judgeCircle('LL')).toBe(false);
  });
  test('Returns false ', () => {
    expect(judgeCircle('RRDUUDLDLUD')).toBe(false);
  });
});
