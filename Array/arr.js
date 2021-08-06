var isValidSudoku = function (board) {
  let rows = [];
  let cols = [];
  let box = [];
  let isValid = true;
  for (let i = 0; i < 9; i++) {
    rows.push([]);
    box.push([]);
    cols.push([]);
  }
  for (let j = 0; j < board.length; j++) {
    for (let k = 0; k < board[j].length; k++) {
      let boxIndex = Math.floor(j / 3) * 3 + Math.floor(k / 3);
      if (board[j][k] !== ".") {
        if (
          rows[k].includes(board[j][k]) ||
          box[boxIndex].includes(board[j][k]) ||
          cols[j].includes(board[j][k])
        ) {
          isValid = false;
          break;
        }
        rows[k].push(board[j][k]);
        cols[j].push(board[j][k]);
        box[boxIndex].push(board[j][k]);
      }
    }
  }
  return isValid;
};
const board1 = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", ".", ".", ".", ".", ".", "6", "."],
  [".", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
// console.log(isValidSudoku(board1));

//==============================================

var rotate1 = function (matrix) {
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
    arr.push([]);
  }

  for (let k = 0; k < matrix.length; k++) {
    for (let n = 0; n < matrix.length; n++) {
      arr[k].push(matrix[matrix.length - 1 - n][k]);
    }
  }
  return arr
};

matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// console.log(rotate1(matrix1));

// ======================================
var rotate = function (matrix) {
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
    arr.push([]);
  }

  for (let k = 0; k < matrix.length; k++) {
    for (let n = 0; n < matrix.length; n++) {
      arr[k].push(matrix[matrix.length - 1 - n][k]);
    }
  }
  for (let k = 0; k < matrix.length; k++) {
    for (let n = 0; n < matrix.length; n++) {
      [matrix[k][n]] = [arr[k][n]];
    }
  }
  return matrix
};

matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(rotate(matrix));
