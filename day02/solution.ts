import { readFileSync } from "node:fs";

const lines = readFileSync("./day02/input.txt", { encoding: "utf-8" }) // read input.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline
const roundPairArray = lines.map((line) => line.split(" "));
const OUTCOME_POINTS = {
  "A X": 4,
  "A Y": 8,
  "A Z": 3,
  "B X": 1,
  "B Y": 5,
  "B Z": 9,
  "C X": 7,
  "C Y": 2,
  "C Z": 6,
} as Record<string, number>;

const totalPoints = lines.reduce((acc, cur) => acc + OUTCOME_POINTS[cur], 0);
console.log(totalPoints)
