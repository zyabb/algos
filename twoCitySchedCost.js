var twoCitySchedCost = function(costs) {
  let result = 0;
  let a_count = 0;
  let b_count = 0;
  let n = costs.length / 2;

  //sorting array
  costs.sort((a, b) => {
    const a_diff = a[0] > a[1] ? a[0] - a[1] : a[1] - a[0];
    const b_diff = b[0] > b[1] ? b[0] - b[1] : b[1] - b[0];
    return b_diff - a_diff;
  });

  for (let index = 0; index < costs.length; index++) {
    if (a_count === n) {
      result += costs[index][1];
    } else if (b_count === n) {
      result += costs[index][0];
    } else {
      const a = costs[index][0];
      const b = costs[index][1];
      if (a < b) {
        result += a;
        a_count++;
      } else {
        result += b;
        b_count++;
      }
    }
  }
  return result;
};

module.exports = twoCitySchedCost;
