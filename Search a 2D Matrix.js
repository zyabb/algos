const searchMatrix = function(matrix, target) {
  let ourMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    let currentMatrix = matrix[i];
    if (currentMatrix[currentMatrix.length - 1] >= target) {
      ourMatrix = currentMatrix;
      break;
    }
  }

  let leftP = 0;
  let rightP = ourMatrix.length - 1;

  while (leftP <= rightP) {
    let middle = Math.floor((rightP + leftP) / 2);
    if (target === ourMatrix[middle]) {
      return true;
    } else if (target > ourMatrix[middle]) {
      leftP = middle + 1;
    } else {
      rightP = middle - 1;
    }
  }
  return false;
};

module.exports = searchMatrix;
