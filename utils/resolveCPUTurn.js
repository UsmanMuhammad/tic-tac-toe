/**
 * This generates a random turn for the CPU
 */
export function resolveCPUTurn(board) {
  const emptyCells = []

  board.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      if ( cell === "0" ) {
        emptyCells.push([rowIndex, cellIndex])
      }
    })
  })

  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  const randomCell = emptyCells[randomIndex];

  return randomCell
  
}
