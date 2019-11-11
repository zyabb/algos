const lastStoneWeight = function(stones) {
  while (stones.length > 1) {
    let y = Math.max(...stones);
    stones.splice(stones.indexOf(y), 1);

    let x = Math.max(...stones);
    stones.splice(stones.indexOf(x), 1);

    if (x !== y) {
      stones.push(y - x);
    }
  }
  return stones[0] || 0;
};

module.exports = lastStoneWeight;
