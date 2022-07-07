const solution = (maze, startRow, startCol, destRow, destCol) => {
  return recursiveMove(maze, [startRow, startCol], [destRow, destCol]) 
};

function recursiveMove(maze, currentSpace, finalSpace) {
  if (currentSpace[0] === finalSpace[0] && currentSpace[1] === finalSpace[1]) {
      return true;
  }
  
  let validMoves = getValidMoves(maze, currentSpace);
  
  //if valid moves exist, call the recursive fn for each one.
  if (validMoves.length !== 0 ) {
      for (let i = 0; i < validMoves.length; i += 1) {
          validMove = validMoves[i];
          if (recursiveMove(maze, validMove, finalSpace) === true) {
              return true
          } else {
              return false
          }
      }
  } else {
      return false
  }
}

function getValidMoves(maze, currentSpace) {
  let possibleMoves = getPossibleMoves(currentSpace);
  console.log(possibleMoves)
  return possibleMoves.filter((move) => moveIsValid(maze, move))
}

function moveIsValid(maze, move) {
  let r = move[0];
  let c = move[1];
  console.log(move)
  console.log(maze)
  if (maze[r] === undefined) {
    return false
  } else {
    return (maze[r][c] === 0)
  }
}

function getPossibleMoves(currentSpace) {
  let r = currentSpace[0];
  let c = currentSpace[1];
  return [
      [r - 1, c], //up move
      [r + 1, c], //down move
      [r, c - 1], //left move
      [r, c + 1], //right move
  ];
}    

let maze = [[0,1], [1,0]];
console.log(solution(maze, 0, 0, 1, 1))