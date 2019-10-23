const fourSumCount = (A, B, C, D) => {
  let counter = 0;
  let seen = {};

  for (a of A) {
    for (b of B) {
      let sum = a + b;
      if (seen[sum]) {
        seen[sum] += 1;
      } else {
        seen[sum] = 1;
      }
    }
  }

  for (c of C) {
    for (d of D) {
      let sum = 0 - (d + c);
      if (seen[sum]) {
        counter += seen[sum];
      }
    }
  }
  return counter;
};

module.exports = fourSumCount;
