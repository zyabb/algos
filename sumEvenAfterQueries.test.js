const sumEvenAfterQueries = require('./sumEvenAfterQueries');

describe('Return the answer to all queries.  Your answer array should have answer[i] as the answer to the i-th query.', function() {
  test('Returns 5 ', () => {
    expect(
      sumEvenAfterQueries([1, 2, 3, 4], [[1, 0], [-3, 1], [-4, 0], [2, 3]])
    ).toEqual([8, 6, 2, 4]);
  });
});
