const mergeSort = require('./mergeSort');

describe('Sorts an array ', function() {
  test('Returns [1,2,3,5]', () => {
    expect(mergeSort([5, 2, 3, 1])).toEqual([1, 2, 3, 5]);
  });
  test('Returns [3, 99, -1, -100]', () => {
    expect(mergeSort([5, 1, 1, 2, 0, 0])).toEqual([0, 0, 1, 1, 2, 5]);
  });
});
