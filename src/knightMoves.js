function getPossibleMoves(start) {
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

function logPath(start) {
  const result = [];
  while (start) {
    result.unshift(start.cord);
    start = start.prev;
  }

  console.log(`The shortest path takes ${result.length - 1} moves, check it!`);
  result.forEach((move) => console.log(move));
}

export function knightMoves(start, end) {
  const queue = [{ cord: start, prev: null }];
  const visited = new Set();
  visited.add(start.toString());

  while (queue.length) {
    start = queue.shift();

    if (start.cord.toString() === end.toString()) return logPath(start);

    getPossibleMoves(start.cord).forEach((move) => {
      if (visited.has(move.toString())) return;

      visited.add(move.toString());
      queue.push({ cord: move, prev: start });
    });
  }
}
