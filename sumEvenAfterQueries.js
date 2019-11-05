var sumEvenAfterQueries = function(A, queries) {
  let result = new Array(A.length);
  for (let i = 0; i < queries.length; i++) {
    let current = queries[i];
    A[current[1]] += current[0];
    result[i] = evenNumSum(A);
  }
  return result;
};

const evenNumSum = array => {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      result += array[i];
    } else {
      continue;
    }
  }
  return result;
};

module.exports = sumEvenAfterQueries;
