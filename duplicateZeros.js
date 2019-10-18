const duplicateZeros = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      if (i !== arr.length - 1 && i + 1 !== arr.length) {
        for (let j = arr.length - 1; j >= i + 2; j--) {
          arr[j] = arr[j - 1];
        }

        arr[i + 1] = 0;
        i++;
      }
    }
  }
};
