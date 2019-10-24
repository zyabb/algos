const reverseFactorial = result => {
  let number = 2;
  while (result > 1) {
    result /= number;
    if (Math.floor(result) - result !== 0) {
      return 'error';
    }
    number++;
  }
  return number - 1;
};

module.exports = reverseFactorial;
