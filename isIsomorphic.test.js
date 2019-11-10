const isIsomorphic = require('./isIsomorphic');

describe('Given two strings s and t, determine if they are isomorphic', function() {
  test('Returns true ', () => {
    expect(isIsomorphic('paper', 'title')).toBe(true);
  });
  test('Returns true ', () => {
    expect(isIsomorphic('egg', 'odd')).toBe(true);
  });
  test('Returns true ', () => {
    expect(isIsomorphic('13', '42')).toBe(true);
  });
  test('Returns true ', () => {
    expect(isIsomorphic('1', '2')).toBe(true);
  });
  test('Returns false ', () => {
    expect(isIsomorphic('foo', 'bar')).toBe(false);
  });
});
