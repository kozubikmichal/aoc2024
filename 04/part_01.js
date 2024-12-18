// 2654

import input from "./input.js";

const lines = input.split("\n");
const XMAS = "XMAS";

const add = (x) => x + 1;
const sub = (x) => x - 1;
const keep = (x) => x;

const check = (x, y, i, moveX, moveY) => {
  if (i >= XMAS.length) {
    return true;
  }
  if (x < 0 || y < 0 || x >= lines.length || y >= lines[x].length) {
    return false;
  }

  return (
    lines[x][y] === XMAS[i] && check(moveX(x), moveY(y), i + 1, moveX, moveY)
  );
};

const totalMatches = lines.reduce((acc, line, x) => {
  let matches = 0;

  for (let y = 0; y < line.length; y++) {
    matches += [
      check(x, y, 0, add, keep), // right
      check(x, y, 0, sub, keep), // left
      check(x, y, 0, keep, add), // down
      check(x, y, 0, keep, sub), // up
      check(x, y, 0, add, add), // right down
      check(x, y, 0, add, sub), // right up
      check(x, y, 0, sub, add), // left down
      check(x, y, 0, sub, sub), // left up
    ].filter(Boolean).length;
  }

  return acc + matches;
}, 0);

console.log(totalMatches);
