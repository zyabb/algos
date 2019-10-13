const mergeSort = array => {
  if (array.length === 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  let leftIdx = 0,
    rightIdx = 0;
  let result = [];

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      result.push(left[leftIdx]);
      leftIdx++;
    } else {
      result.push(right[rightIdx]);
      rightIdx++;
    }
  }
  return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
};

module.exports = mergeSort;
