//TODO: OOP this -- a board should be a class; these would work easier and cleaner as methods.

interface BoardSpace {
  val: number;
  coords: [number, number];
  revealed: 0 | 1;
  neighbors: Set<BoardSpace>;
}

/** makeBoard: Make a minesweeper gameboard,
 * a square matrix of size size, with nMines mines, including counts of surrounding mines */
function makeBoard (size: number, nMines: number): BoardSpace[][] {
  const board: BoardSpace[][] = []
  for (let y = 0; y < size; y++) {
    board.push([]);
    for (let x = 0; x < size; x++) {
      board[y].push({val: 0, coords:[y,x], revealed: 0, neighbors: new Set});
    }
  }

  //TODO: More efficient to build neighbor list as spaces get made, cleverly filling in as needed
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      findNeighbors(board, board[y][x]);
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
        space.neighbors.add(board[i][j]);
      }
    }
  }

}

function placeMines (board: BoardSpace[][], nMines: number, clicked: BoardSpace): void {
  //insert mines, and increment neighbors' count
  const size = board.length;
  let minesRemaining = nMines;
  while (minesRemaining) {
    const y = Math.floor(Math.random() * size);
    const x = Math.floor(Math.random() * size);

    const mineSpace = board[y][x];

    if (mineSpace.val >= 0 && mineSpace !== clicked && !clicked.neighbors.has(mineSpace)) {
      mineSpace.val = -1;

      for (const neighbor of mineSpace.neighbors) {
        if (neighbor.val >= 0) {
          neighbor.val++;
        }
      }

      minesRemaining--;
    }
  }
}


function splashFlipZeroes (space: BoardSpace): void {
  const seen: Set<BoardSpace> = new Set([]);
  _splashFlipZeroes(space);

  function _splashFlipZeroes (_space: BoardSpace): void {
    _space.revealed = 1;
    seen.add(_space);
    for (const neighbor of _space.neighbors) {
      neighbor.revealed = 1;
      if (neighbor.val === 0 && !seen.has(neighbor)) {
        _splashFlipZeroes(neighbor);
      }
    }

  }
}

function revealAll (board: BoardSpace[][]): BoardSpace[][] {
  const revealed = board.map(row => row.map(space => {
    space.revealed = 1;
    return space;
  }))
  return revealed;
}

export { makeBoard, splashFlipZeroes, revealAll, placeMines };
