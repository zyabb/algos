const countPrimes = function(n) {
  let count = 0;
  for (let i = 2; i < n; i++) {
    let bool = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        bool = false;
        break;
      }
    }
    if (bool) {
      count++;
    }
  }
  return count;
};
module.exports = countPrimes;
