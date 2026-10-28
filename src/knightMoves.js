function getAllPossibleMoves(start) {
  const possibleMoves = [
    [start[0] - 2, start[1] - 1],
    [start[0] - 2, start[1] + 1],
    [start[0] + 2, start[1] - 1],
    [start[0] + 2, start[1] + 1],
    [start[0] - 1, start[1] + 2],
    [start[0] - 1, start[1] - 2],
    [start[0] + 1, start[1] + 2],
    [start[0] + 1, start[1] - 2],
  ];

  for (let i = 0; i < possibleMoves.length; i++) {
    if (
      possibleMoves[i][0] < 0 ||
      possibleMoves[i][0] > 7 ||
      possibleMoves[i][1] < 0 ||
      possibleMoves[i][1] > 7
    )
      possibleMoves.splice(i--, 1);
  }

  return possibleMoves;
}

function createChessGraph() {
  const chess = new Array(8).fill().map(() => [[], [], [], [], [], [], [], []]);

  for (let x = 0; x < chess.length; x++) {
    for (let y = 0; y < chess.length; y++) {
      chess[x][y] = getAllPossibleMoves([x, y]);
    }
  }

  return chess;
}

const chessGraph = createChessGraph();

export function knightMoves(start, end) {
  const queue = [start];
  const visited = [];

  while (queue.length) {
    start = queue.shift();
    const possibleMoves = chessGraph[start[0]][start[1]].filter(
      (move) => !JSON.stringify(visited).includes(JSON.stringify(move)),
    );
    possibleMoves.forEach((move) => (move.parent = start));

    queue.push(...possibleMoves);
    visited.push(...possibleMoves);

    if (JSON.stringify(start) === JSON.stringify(end)) {
      const result = [];
      while (start) {
        result.push([start[0], start[1]]);
        start = start.parent;
      }

      console.log(
        `The shortest path takes ${result.length - 1} moves, check it!`,
      );
      result.reverse().forEach((move) => console.log(move));
      break;
    }
  }
}
