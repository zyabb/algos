const lastStoneWeight = require('./lastStoneW');

describe('Returns small stone', function() {
  test('Returns 1 ', () => {
    expect(lastStoneWeight([2, 7, 4, 1, 8, 1])).toBe(1);
  });
});
