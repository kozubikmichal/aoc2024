import { left, right } from "./input.js";

left.sort((a, b) => a - b);
right.sort((a, b) => a - b);

const result = left.reduce((acc, l, i) => {
  return acc + Math.abs(l - right[i]);
}, 0);

console.log(result);
