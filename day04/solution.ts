import { readFileSync } from "node:fs";

const lines = readFileSync("./day04/input.txt", { encoding: "utf-8" }) // read input.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline

let partOneRes = 0;

lines.forEach((line) => {
  const elves = line.split(",");
  const [firstSectionFirst, secondSectionFirst] = elves[0].split("-");
  const [firstSectionSecond, secondSectionSecond] = elves[1].split("-");

  if (
    Number(firstSectionFirst) <= Number(firstSectionSecond) &&
    Number(secondSectionFirst) >= Number(secondSectionSecond)
  ) {
    partOneRes++;
  } else if (
    Number(firstSectionFirst) >= Number(firstSectionSecond) &&
    Number(secondSectionFirst) <= Number(secondSectionSecond)
  ) {
    partOneRes++;
  }
});

console.log(partOneRes);

// part2
let partTwoRes = 0;

lines.forEach((line) => {
  const elves = line.split(",");
  const [firstSectionFirst, secondSectionFirst] = elves[0].split("-");
  const [firstSectionSecond, secondSectionSecond] = elves[1].split("-");

  if (
    Number(firstSectionFirst) <= Number(firstSectionSecond) &&
    Number(secondSectionFirst) >= Number(firstSectionSecond)
  ) {
    partTwoRes++;
  } else if (
    Number(firstSectionFirst) >= Number(firstSectionSecond) &&
    Number(firstSectionFirst) <= Number(secondSectionSecond)
  ) {
    partTwoRes++;
  }
});

console.log(partTwoRes);

