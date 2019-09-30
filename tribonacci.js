const tribonacci = n => {
  let seq = [0, 1, 1];
  while (seq.length - 1 < n) {
    const nextIdx = seq.length;
    seq.push(seq[nextIdx - 3] + seq[nextIdx - 2] + seq[nextIdx - 1]);
  }
  return seq[n];
};

module.exports = tribonacci;
