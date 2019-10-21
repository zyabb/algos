const numSquares = n => {
  let ar = new Array(n + 1);
  ar.fill(Infinity);
  ar[0] = 0;
  ar[1] = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      ar[i] = Math.min(ar[i - j * j] + 1, ar[i]);
    }
  }
  return ar[n];
};

module.exports = numSquares;
