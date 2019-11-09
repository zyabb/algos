var wordPattern = function(pattern, str) {
  let strArray = str.split(' ');
  let ptrArray = pattern.split('');
  let hash = {};
  let index = 0;
  while (index < ptrArray.length) {
    let currentLetter = ptrArray[index];
    let currentWord = strArray[index];

    if (!hash[currentLetter] && !Object.values(hash).includes(currentWord)) {
      hash[currentLetter] = currentWord;
    } else {
      index++;
      continue;
    }
    index++;
  }
  let result = [];
  ptrArray.forEach(el => {
    result.push(hash[el]);
  });

  return str === result.join(' ');
};
var wordPattern = function(pattern, str) {
  let strArray = str.split(' ');
  let ptrArray = pattern.split('');
  let hash = {};
  let index = 0;
  while (index < ptrArray.length) {
    let currentLetter = ptrArray[index];
    let currentWord = strArray[index];

    if (!hash[currentLetter] && !Object.values(hash).includes(currentWord)) {
      hash[currentLetter] = currentWord;
    } else {
      index++;
      continue;
    }
    index++;
  }
  let result = [];
  ptrArray.forEach(el => {
    result.push(hash[el]);
  });

  return str === result.join(' ');
};
