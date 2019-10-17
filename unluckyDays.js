function unluckyDays(year) {
  let counter = 0;
  for (let i = 0; i < 12; i++) {
    let thisMonth = new Date(year, i, 13);
    if (thisMonth.getDay() === 5) {
      counter++;
    }
  }
  return counter;
}

module.exports = unluckyDays;
