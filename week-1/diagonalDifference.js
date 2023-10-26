function diagonalDifference(arr) {
  let leftDiagonalSum = 0;
  let rightDiagonalSum = 0;

  for (let i = 0; i < arr.length; i++) {
    leftDiagonalSum += arr[i][i]; // Sum of the main diagonal
    rightDiagonalSum += arr[i][arr.length - 1 - i]; // Sum of the reverse diagonal
  }

  return Math.abs(leftDiagonalSum - rightDiagonalSum);
}
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

console.log(diagonalDifference(matrix)); // Expected output: 2
