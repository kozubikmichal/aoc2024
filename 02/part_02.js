import input from "./input.js";

const isIncremental = (value) => value > 0 && value <= 3;
const isDecremental = (value) => value < 0 && value >= -3;

const safe = input.split("\n").reduce((acc, line) => {
  const lineValues = line.split(" ");

  let safeLine = false;
  let toIgnore = -1;

  while (!safeLine && toIgnore < lineValues.length) {
    let values = lineValues.slice();

    if (toIgnore >= 0) {
      values.splice(toIgnore, 1);
    }

    const check = values[1] - values[0] > 0 ? isIncremental : isDecremental;

    safeLine = values
      .slice(1)
      .map((value, index) => value - values[index])
      .every(check);

    toIgnore++;
  }

  return acc + (safeLine ? 1 : 0);
}, 0);

console.log(safe);
