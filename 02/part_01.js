// 534

import input from "./input.js";

const isIncremental = (value) => value > 0 && value <= 3;
const isDecremental = (value) => value < 0 && value >= -3;

const safe = input.split("\n").reduce((acc, line) => {
  const values = line.split(" ");
  const check = values[1] - values[0] > 0 ? isIncremental : isDecremental;

  const safeLine = values
    .slice(1)
    .map((value, index) => value - values[index])
    .every(check);

  return acc + (safeLine ? 1 : 0);
}, 0);

console.log(safe);
