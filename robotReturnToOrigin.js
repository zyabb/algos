const judgeCircle = function(moves) {
  let hash = { x: 0, y: 0 };
  for (let i = 0; i < moves.length; i++) {
    let move = moves[i];
    if (move === 'U') hash.x += 1;
    if (move === 'D') hash.x -= 1;
    if (move === 'L') hash.y += 1;
    if (move === 'R') hash.y -= 1;
  }
  const { x, y } = hash;
  return x === 0 && y === 0;
};

module.exports = judgeCircle;
