/** makeBoard: Make a minesweeper gameboard,
 * a square matrix of size size, with nMines mines, including counts of surrounding mines */
function makeBoard (size: number, nMines: number): number[][] {
  const board: number[][] = new Array(size);
  for (const row of board) {
    for (let i = 0; i < size; i++) {
      row.push(0);
    }
  }

  //insert mines, and call incrementSurrounding
  let minesRemaining = nMines;
  while (minesRemaining) {
    const y = Math.floor(Math.random() * size);
    const x = Math.floor(Math.random() * size);

    if (board[y][x] >= 0) {
      board[y][x] = -1;

      incrementSurrounding(board, y, x);

      minesRemaining--;
    }
  }

  return board;
}

/** incrementSurrounding: Increment each of the 8 spaces surrounding a mine,
 * located at [y][x] on a board matrix, if they exist and are not also mines */
function incrementSurrounding (board: number[][], y: number, x: number): void {
  const len = board.length;

  const startY = y === 0 ? 0 : y - 1;
  const startX = x === 0 ? 0 : x - 1;
  const endY = y === len - 1 ? len : y + 2;
  const endX = x === len - 1 ? len : x + 2;

  for (let i = startY; i < endY; i++) {
    for (let j = startX; j < endX; j++) {
      if (board[i][j] >= 0) {
        board[i][j]++;
      }
    }
  }

}

export { makeBoard };
