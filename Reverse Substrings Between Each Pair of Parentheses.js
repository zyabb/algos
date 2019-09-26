const reverseParentheses = s => {
  let stack = [];
  for (char of s) {
    if (char !== ')') {
      stack.push(char);
      continue;
    }

    let c = stack.pop();
    let queue = [];

    while (c !== '(') {
      queue.push(c);
      c = stack.pop();
    }

    while (queue.length) {
      stack.push(queue.shift());
    }
  }

  return stack.join('');
};

console.log(reverseParentheses('a(bcdefghijkl(mno)p)q'));

module.exports = reverseParentheses;
