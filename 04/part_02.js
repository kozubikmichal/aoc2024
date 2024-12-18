// 1990

import input from "./input.js";

const lines = input.split("\n");
const MAS = "MAS";

const add = (x) => x + 1;
const sub = (x) => x - 1;

const check = (x, y, i, moveX, moveY) => {
  if (i >= MAS.length) {
    return true;
  }
  if (x < 0 || y < 0 || x >= lines.length || y >= lines[x].length) {
    return false;
  }

  return (
    lines[x][y] === MAS[i] && check(moveX(x), moveY(y), i + 1, moveX, moveY)
  );
};

const totalMatches = lines.reduce((acc, line, x) => {
  let matches = 0;

  for (let y = 0; y < line.length; y++) {
    matches +=
      [
        check(x - 1, y - 1, 0, add, add),
        check(x + 1, y + 1, 0, sub, sub),
        check(x - 1, y + 1, 0, add, sub),
        check(x + 1, y - 1, 0, sub, add),
      ].filter(Boolean).length > 1;
  }

  return acc + matches;
}, 0);

console.log(totalMatches);
