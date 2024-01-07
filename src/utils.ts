//TODO: OOP this -- a board should be a class; these would work easier and cleaner as methods.

interface BoardSpace {
  val: number;
  coords: [number, number];
  revealed: 0 | 1;
  neighbors: BoardSpace[];
}

/** makeBoard: Make a minesweeper gameboard,
 * a square matrix of size size, with nMines mines, including counts of surrounding mines */
function makeBoard (size: number, nMines: number): BoardSpace[][] {
  const board: BoardSpace[][] = []
  for (let y = 0; y < size; y++) {
    board.push([]);
    for (let x = 0; x < size; x++) {
      board[y].push({val: 0, coords:[y,x], revealed: 0, neighbors: []});
    }
  }

  //TODO: More efficient to build neighbor list as spaces get made, cleverly filling in as needed
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      findNeighbors(board, board[y][x]);
    }
  }

  //insert mines, and increment neighbors' count
  let minesRemaining = nMines;
  while (minesRemaining) {
    const y = Math.floor(Math.random() * size);
    const x = Math.floor(Math.random() * size);

    const mineSpace = board[y][x];

    if (mineSpace.val >= 0) {
      mineSpace.val = -1;

      for (const neighbor of mineSpace.neighbors) {
        if (neighbor.val >= 0) {
          neighbor.val++;
        }
      }

      minesRemaining--;
    }
  }

  return board;
}

/** findNeighbors: builds array of touching, neighbor BoardSpaces */
function findNeighbors (board: BoardSpace[][], space: BoardSpace): void {
  const len = board.length;
  const [y, x] = space.coords;

  const startY = y === 0 ? 0 : y - 1;
  const startX = x === 0 ? 0 : x - 1;
  const endY = y === len - 1 ? len : y + 2;
  const endX = x === len - 1 ? len : x + 2;

  for (let i = startY; i < endY; i++) {
    for (let j = startX; j < endX; j++) {
      if (board[i][j] != space) {
        space.neighbors.push(board[i][j]);
      }
    }
  }

}

//FIXME: This isn't right, actually. Seems like it shouldn't splash diagnolly?
// Need to rethink use of neighbor list. Can hack fix now.
function splashFlipZeroes (space: BoardSpace): void {
  const seen: Set<BoardSpace> = new Set([]);
  _splashFlipZeroes(space);

  function _splashFlipZeroes (_space: BoardSpace): void {
    _space.revealed = 1;
    seen.add(_space);
    for (const neighbor of _space.neighbors) {
      if (neighbor.val === 0 && !seen.has(neighbor)) {
        _splashFlipZeroes(neighbor);
      }
    }

  }
}

export { makeBoard, splashFlipZeroes };
