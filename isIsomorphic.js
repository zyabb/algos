const isIsomorphic = function(s, t) {
  if (s.length !== t.length) return false;
  let S = s.split('');
  let T = t.split('');
  let hash1 = new Map();
  let hash2 = new Map();
  let index = 0;
  while (index < S.length) {
    let sLetter = S[index];
    let tLetter = T[index];
    hash1.set(sLetter, index);
    hash2.set(tLetter, index);
    index++;
  }
  return (
    Array(...hash1.values()).join('') === Array(...hash2.values()).join('')
  );
};

module.exports = isIsomorphic;
