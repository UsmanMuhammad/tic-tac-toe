export function getSource(board, row, column) {
  const player = board[row][column]

  let uri = ""
  if ( player === "CPU" )  {
    uri = require(`../assets/circle.png`)
  } else if ( player === "PLY") {
    uri = require(`../assets/cross.png`)
  } else {}

  return uri;
}
