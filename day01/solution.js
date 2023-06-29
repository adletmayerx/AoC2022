import { readFileSync } from "node:fs";
const lines = readFileSync("./day01/input.txt", { encoding: "utf-8" }) // read input.txt content
    .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
    .trim() // Remove starting/ending whitespace
    .split("\n\n"); // Split on newline
const elfCaloriesSumArray = lines.map((line) => line.split("\n").reduce((acc, cur) => {
    return acc + Number(cur);
}, 0));
elfCaloriesSumArray.sort();
const maxCalories = elfCaloriesSumArray[elfCaloriesSumArray.length - 1];
console.log(maxCalories);
const topThreeCaloriesSum = elfCaloriesSumArray.slice(-3).reduce((acc, cur) => acc + cur, 0);
console.log(topThreeCaloriesSum);
//# sourceMappingURL=solution.js.map