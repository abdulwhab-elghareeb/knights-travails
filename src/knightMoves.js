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

function knightMoves(start, end) {
  const queue = [start];
  const visited = [];
  while (queue.length) {
    start = queue.shift();
    const possibleMoves = chessGraph[start[0]][start[1]].filter(
      (val) => !JSON.stringify(visited).includes(JSON.stringify(val)),
    );
    possibleMoves.forEach((val) => (val.parent = start));

    queue.push(...possibleMoves);
    visited.push(...possibleMoves);

    if (JSON.stringify([start[0], start[1]]) === JSON.stringify(end)) {
      const result = [];
      while (start) {
        result.push([start[0], start[1]]);
        start = start.parent;
      }

      console.log(
        `Wow you made it in ${result.length - 1} moves check the result:`,
      );
      console.log(result.reverse());
      return;
    }
  }
}

console.log(knightMoves([0, 0], [3, 3]));
// // console.log(knightMoves([2,3], [4,3]));
