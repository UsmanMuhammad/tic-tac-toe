/**
 * After every turn, it checks if the player or CPU has won the match or not.
 * It checks the winning combinations as follows:
 * - All three in a row 
 * - All three in a colum
 * - All three diagonally
 */
export function checkIfWinner(player, board) {
  let win = false
  const winCount = 3

  let rightDiagonalCount = 0
  let leftDiagonalCount = 0
  let leftDiagonalIndex = 2

  board.forEach((row, rowIndex) => {
    let rowCount = 0
    let colCount = 0

    row.forEach((cell, cellIndex) => {
      //Check for row
      if ( player === cell ) rowCount += 1
      //Check for column
      if ( player === board[cellIndex][rowIndex] ) colCount += 1
    })

    //Check for right diagonal
    if ( player === board[rowIndex][rowIndex] ) {
      rightDiagonalCount += 1;
    }
    //Check for left diagonal
    if ( player === board[rowIndex][leftDiagonalIndex] ) {
      leftDiagonalIndex -= 1;
      leftDiagonalCount += 1;
    }

    if (
      rowCount === winCount           ||
      colCount === winCount           ||
      rightDiagonalCount === winCount ||
      leftDiagonalCount === winCount
    ) {
      win = true
    }
  })

  return win
}