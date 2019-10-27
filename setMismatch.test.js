const findErrorNums = require('./setMismatch');

describe('Finds duplicate', function() {
  test('Returns [3, 4] ', () => {
    expect(findErrorNums([1, 2, 3, 3, 5])).toEqual([3, 4]);
  });
  test('Returns [1, 2] ', () => {
    expect(findErrorNums([1, 1])).toEqual([1, 2]);
  });
});
