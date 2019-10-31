var romanToInt = function(s) {
  if (s.length === 1) {
    return getValue(s.charAt(0));
  }

  let value = 0,
    current = 0,
    previous = 0,
    prevRomain = s.charAt(0);

  for (let i = 1; i < s.length; i++) {
    previous = getValue(prevRomain);
    current = getValue(s.charAt(i));

    if (previous >= current) {
      value += previous;
    } else {
      value -= previous;
    }
    prevRomain = s.charAt(i);
  }
  value += current;
  return value;
};

const getValue = letter => {
  if (letter === 'I') return 1;
  else if (letter === 'V') return 5;
  else if (letter === 'X') return 10;
  else if (letter === 'L') return 50;
  else if (letter === 'C') return 100;
  else if (letter === 'D') return 500;
  else return 1000;
};

module.exports = romanToInt;
