function getAllPossibleMoves(start) {
  return [
    [start[0] - 2, start[1] - 1],
    [start[0] - 2, start[1] + 1],
    [start[0] + 2, start[1] - 1],
    [start[0] + 2, start[1] + 1],
    [start[0] - 1, start[1] + 2],
    [start[0] - 1, start[1] - 2],
    [start[0] + 1, start[1] + 2],
    [start[0] + 1, start[1] - 2],
  ].filter(
    (move) => !(move[0] < 0 || move[0] > 7 || move[1] < 0 || move[1] > 7),
  );
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

export function knightMoves(start, end) {
  const chessGraph = createChessGraph();
  const queue = [{ cord: start, parent: null }];
  const visited = {};

  while (queue.length) {
    start = queue.shift();
    const possibleMoves = chessGraph[start.cord[0]][start.cord[1]].filter(
      (move) => !visited[JSON.stringify(move)],
    );

    possibleMoves.forEach((move, i, arr) => {
      arr[i] = { cord: move, parent: start };
      visited[JSON.stringify(arr[i].cord)] = true;
    });

    queue.push(...possibleMoves);

    if (JSON.stringify(start.cord) === JSON.stringify(end)) {
      const result = [];
      while (start) {
        result.unshift(start.cord);
        start = start.parent;
      }

      console.log(
        `The shortest path takes ${result.length - 1} moves, check it!`,
      );
      result.forEach((move) => console.log(move));
      return;
    }
  }
}
