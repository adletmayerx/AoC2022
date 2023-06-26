import { readFileSync } from "node:fs";
const lines = readFileSync("./day01/input.txt", { encoding: "utf-8" }) // read input.txt content
    .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
    .trim() // Remove starting/ending whitespace
    .split("\n\n"); // Split on newline
const elfCaloriesSumArray = lines.map((line) => line.split("\n").reduce((acc, cur) => {
    return acc + Number(cur);
}, 0));
let maxCalories = -Infinity;
elfCaloriesSumArray.forEach((elf) => (maxCalories = Math.max(maxCalories, elf)));
//# sourceMappingURL=solution.js.map