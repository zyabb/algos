const twoCitySchedCost = require('./twoCitySchedCost');

describe('Return the minimum cost to fly every person to a city such that exactly N people arrive in each city.', function() {
  test('Returns 110 ', () => {
    expect(twoCitySchedCost([[10, 20], [30, 200], [400, 50], [30, 20]])).toBe(
      110
    );
  });
  test('Returns 1859 ', () => {
    expect(
      twoCitySchedCost([
        [259, 770],
        [448, 54],
        [926, 667],
        [184, 139],
        [840, 118],
        [577, 469],
      ])
    ).toBe(1859);
  });
});
