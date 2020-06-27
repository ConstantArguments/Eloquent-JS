/*
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

*/

// too easy?
for (let counter = 0; counter < 4; counter++) {
  let rows = ' # # # #\n# # # # ';
  console.log(rows);
}

// second attempt
let pips = "";

for (let board = 0; board < 4; board++) {
  for (let row = 0; row <= 16; row++) {
    if ((row == 8) || (row == 16)) {
      pips = pips + "\n";
      // console.log(row, pips);
    }else if (row % 2 == 0) {
      pips = pips + " ";
      // console.log(row, pips);
    } else if (row % 2 != 0) {
      pips = pips + "#";
      // console.log(row, pips);
    }
  }
}
console.log(pips);




//book answer:
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
