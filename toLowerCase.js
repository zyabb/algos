const toLowerCase = str => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt() <= 90 && str[i].charCodeAt() >= 65) {
      result += String.fromCharCode(str[i].charCodeAt() + 32);
    } else {
      result += str[i];
    }
  }
  return result;
};
module.exports = toLowerCase;
