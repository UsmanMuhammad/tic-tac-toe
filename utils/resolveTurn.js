export function resolveTurn(row, column, isComputerTurn, board, setBoard, setIsComputerTurn) {
  const move = isComputerTurn ? "CPU" : "PLY"
  const newBoard = [...board] 

  newBoard[row][column] = move

  setBoard(newBoard)
  move === "CPU" ? setIsComputerTurn(false) : setIsComputerTurn(true)
}