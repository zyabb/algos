const fourSumCount = require('./4SumII');

describe('Given four lists A, B, C, D of integer values, compute how many tuples (i, j, k, l) there are such that A[i] + B[j] + C[k] + D[l] is zero.', function() {
  const A = [1, 2];
  const B = [-2, -1];
  const C = [-1, 2];
  const D = [0, 2];
  test('Returns 2 ', () => {
    expect(fourSumCount(A, B, C, D)).toBe(2);
  });
});
