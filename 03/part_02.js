// 87163705

import input from "./input.js";

const inputWithoutDonts = input
  .replaceAll(/\n/g, "")
  .replaceAll(/don't\(\).*?do\(\)/g, "_");

const muls = [...inputWithoutDonts.matchAll(/mul\(\d{1,3},\d{1,3}\)/g)].map(
  ([mul]) => mul
);

console.log(
  muls.reduce((acc, mul) => {
    const [a, b] = mul.slice(4, -1).split(",").map(Number);
    return acc + a * b;
  }, 0)
);
