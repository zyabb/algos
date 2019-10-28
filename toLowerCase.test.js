const toLowerCase = require('./toLowerCase');

describe('Lowercase strings', function() {
  test('Return lovely', () => {
    expect(toLowerCase('LOVELY')).toBe('lovely');
  });
  test('Return true', () => {
    expect(toLowerCase('TRUE')).toBe('true');
  });
});
