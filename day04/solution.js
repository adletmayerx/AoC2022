import { readFileSync } from "node:fs";
const lines = readFileSync("./day03/input.txt", { encoding: "utf-8" }) // read input.txt content
    .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
    .trim() // Remove starting/ending whitespace
    .split("\n"); // Split on newline
//# sourceMappingURL=solution.js.map