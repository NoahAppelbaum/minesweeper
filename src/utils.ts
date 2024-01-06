interface BoardSpace {
  val: number;
  coords: [number, number];
  revealed: 0 | 1;
}

/** makeBoard: Make a minesweeper gameboard,
 * a square matrix of size size, with nMines mines, including counts of surrounding mines */
function makeBoard (size: number, nMines: number): BoardSpace[][] {
  const numBoard: number[][] = []
  for (let i = 0; i < size; i++) {
    numBoard.push([]);
    for (let j = 0; j < size; j++) {
      numBoard[i].push(0);
    }
  }

  //insert mines, and call incrementSurrounding
  let minesRemaining = nMines;
  while (minesRemaining) {
    const y = Math.floor(Math.random() * size);
    const x = Math.floor(Math.random() * size);

    if (numBoard[y][x] >= 0) {
      numBoard[y][x] = -1;

      incrementSurrounding(numBoard, y, x);

      minesRemaining--;
    }
  }

  return numBoard.map((row, y) => row.map((val, x) => ({val, coords:[y,x], revealed: 0})));
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
