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

const REAL_OUTCOME_POINTS = {
  "A X": 3,
  "A Y": 4,
  "A Z": 8,
  "B X": 1,
  "B Y": 5,
  "B Z": 9,
  "C X": 2,
  "C Y": 6,
  "C Z": 7,
} as Record<string, number>;
const realTotalPoints = lines.reduce((acc, cur) => acc + REAL_OUTCOME_POINTS[cur], 0);

console.log(realTotalPoints)
