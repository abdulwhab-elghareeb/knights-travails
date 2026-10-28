import { knightMoves } from "./knightMoves.js";

console.group("[0, 0], [3, 3]---------------------");
knightMoves([0, 0], [3, 3]);
console.groupEnd();

console.group("[3, 3], [0, 0]---------------------");
knightMoves([3, 3], [0, 0]);
console.groupEnd();

console.group("[0, 0], [7, 7]---------------------");
knightMoves([0, 0], [7, 7]);
console.groupEnd();

console.group("[3, 3], [4, 3]---------------------");
knightMoves([3, 3], [4, 3]);
console.groupEnd();

console.group("[0, 0], [0, 7]---------------------");
knightMoves([0, 0], [0, 7]);
console.groupEnd();

console.group("[1, 2], [4, 5]---------------------");
knightMoves([1, 2], [4, 5]);
console.groupEnd();
