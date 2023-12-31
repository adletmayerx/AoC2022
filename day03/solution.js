import { readFileSync } from "node:fs";
function split(str, index) {
    const result = [str.slice(0, index), str.slice(index)];
    return result;
}
const PRIORITIES = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lines = readFileSync("./day03/input.txt", { encoding: "utf-8" }) // read input.txt content
    .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
    .trim() // Remove starting/ending whitespace
    .split("\n"); // Split on newline
const compartmentsArray = lines.map((line) => {
    return split(line, line.length / 2);
});
let sumOfThePriorities = 0;
compartmentsArray.forEach((compartments) => {
    const lib = {};
    const compartmentFirst = compartments[0];
    const compartmentSecond = compartments[1];
    for (let char of compartmentFirst) {
        if (lib[char]) {
            continue;
        }
        lib[char] = char;
    }
    for (let char of compartmentSecond) {
        if (!lib[char]) {
            continue;
        }
        sumOfThePriorities += PRIORITIES.indexOf(char) + 1;
        break;
    }
});
console.log(sumOfThePriorities);
let sumOfBadgesPriorities = 0;
function findBadge(elves) {
    let lib = {};
    elves.forEach((line, index) => {
        for (let char of new Set(line.split(""))) {
            if (!lib[char]) {
                lib[char] = [index];
                continue;
            }
            lib[char].push(index);
            if (lib[char].length !== 3) {
                continue;
            }
            sumOfBadgesPriorities += PRIORITIES.indexOf(char) + 1;
            lib = {};
            break;
        }
    });
    if (!elves.length) {
        return;
    }
}
findBadge(lines);
console.log(sumOfBadgesPriorities);
//# sourceMappingURL=solution.js.map