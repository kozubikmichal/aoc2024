import { left, right } from "./input.js";

const result = left.reduce((acc, l) => {
  return acc + l * right.filter((r) => r === l).length;
}, 0);

console.log(result);
