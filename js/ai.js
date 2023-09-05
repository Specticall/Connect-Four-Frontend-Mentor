import { game } from "./game";
import { gameboard } from "./gameboard";
//prettier-ignore
const board = [
  [" ", " ", " ", " "," "," ", " "],
  [" ", " ", " ", " "," "," ", " "],
  [" ", " ", " ", " "," "," ", " "],
  [" ", " ", " ", " "," "," ", " "],
  [" ", " ", " ", " "," "," ", " "],
  [" ", " ", " ", " "," "," ", " "],
]

// const board = [
//   [" ", " ", " ", " "," "," ", " "],
//   [" ", "2", " ", "1","1"," ", " "],
//   [" ", "1", "1", "2","1"," ", " "],
//   [" ", "2", "2", "1","1"," ", " "],
//   ["2", "1", "1", "2","2","2", "1"],
//   ["2", "2", "1", "2","2","2", "1"],
// ]

// const board = [
//   ["1", "2", "1", "2","1","2", "1"],
//   ["2", "1", "2", "1","2","1", "2"],
//   ["1", "2", "1", "2","1","2", "1"],
//   ["2", "1", "2", "1","2","1", "2"],
//   ["1", "2", "1", "2","1","2", "1"],
//   ["2", "1", "2", "1","2","1", "2"],
// ]

// BUG : PAS LAGI WIN ANIMATION PENCET RESTART JADI RUSAK.

// AI IS PLAYER 2 <=============
class AIClass {
  constructor() {
    window.addEventListener("DOMContentLoaded", () => {
      // setTimeout(() => {
      //   gameboard.printGame(board);
      //   console.log(this.getBestMove(gameboard.gameboard));
      // }, 300);
    });

    //prettier-ignore
    // console.log(
    //   this.#offenseTwoAdjacent5([" ", " ", 2, 1, "@", " ", 2])
    // );
  }

  // ENTRY POINT // API :
  getBestMove(board) {
    const movesPoints = this.#checkScore(
      this.#getPossibleMoves(board),
      board
    );

    let bestMoves = [];
    const randomInt = (min, max) =>
      Math.trunc(Math.random() * (max - min + 1) + min);

    // const movesPoints = [
    //   { coords: [1, 2], score: 0 },
    //   { coords: [2, 2], score: 6 },
    //   { coords: [3, 2], score: 5 },
    //   { coords: [4, 2], score: 27 },
    //   { coords: [5, 2], score: 27 },
    //   { coords: [6, 2], score: 27 },
    //   { coords: [7, 2], score: 0 },
    // ];
    movesPoints.sort((a, b) => b.score - a.score);
    for (let i = 0; i < movesPoints.length; i++) {
      if (
        (movesPoints[i - 1] &&
          movesPoints[i - 1].score ===
            movesPoints[i].score) ||
        i === 0
      ) {
        bestMoves.push(movesPoints[i]);
      } else {
        break;
      }
    }
    return bestMoves[randomInt(0, bestMoves.length - 1)];
  }

  #getPossibleMoves(board) {
    const moves = {};
    for (let y = board.length - 1; y >= 0; y--) {
      for (let x = 0; x < board[0].length; x++) {
        if (board[y][x] === " " && !moves[x])
          moves[x] = [y, x];
      }
    }
    return moves;
  }

  #checkScore(moves, board) {
    const scores = [];
    Object.values(moves).forEach((move) => {
      const [y, x] = move;
      const orientations = this.pulse(y, x, board);
      // console.log(orientations);
      const score = orientations.reduce(
        (score, orient) => {
          // Prioritize center
          score +=
            this.#defense50(orient) ||
            this.#defenseThreeAdjacent25(orient) ||
            this.#defenseTwoAdjacent2(orient);
          score +=
            this.#win(orient) ||
            this.#offenseThreeAdjacent25(orient) ||
            this.#offenseTwoAdjacent5(orient);
          return score;
        },
        x === 3 ? 5 : 0
      );
      // Initial score is 5 if it's from the center board.
      // console.log([y, x], score);
      // console.log("===========");
      scores.push({ coords: move, score });
    });
    return scores;
  }

  // Most of these algos uses two pointer / sliding window technique.

  // Defensive move (50 points) -> O, O, O, X
  // returns 50 if valid, 0 if not.
  #defense50(lines) {
    const currentIndex = lines.indexOf("@");
    let l,
      r,
      validLength = 1;
    l = r = currentIndex;
    while (lines[r]) {
      r++;
      if (!lines[r] || lines[r] === " " || lines[r] === 2)
        break;
      // console.log(lines[r]);
      validLength++;
    }
    while (lines[l]) {
      l--;
      if (!lines[l] || lines[l] === " " || lines[l] === 2)
        break;
      // console.log(lines[l]);
      validLength++;
    }
    return validLength === 4 ? 50 : 0;
  }

  // Win move (infinity points)
  #win(lines) {
    const currentIndex = lines.indexOf("@");
    let l,
      r,
      validLength = 1;
    l = r = currentIndex;
    while (lines[r]) {
      r++;
      if (!lines[r] || lines[r] === " " || lines[r] === 1)
        break;
      // console.log(lines[r]);
      validLength++;
    }
    while (lines[l]) {
      l--;
      if (!lines[l] || lines[l] === " " || lines[l] === 1)
        break;
      // console.log(lines[l]);
      validLength++;
    }
    return validLength === 4 ? Infinity : 0;
  }

  //prettier-ignore
  // Three adjacent (25 points) -> X, X, X, _
  #offenseThreeAdjacent25(lines) {
    const currentIndex = lines.indexOf("@");
    let l,
      r,
      validLength = 1;
    l = r = currentIndex;
    while (lines[r]) {
      r++;
      if (!lines[r] || lines[r] === " " || lines[r] === 1 || validLength > 3) {
        break;
      }
      // console.log(lines[r]);
      validLength++;
    }
    while (lines[l] && validLength < 3) {
      l--;
      if (!lines[l] || lines[l] === " " || lines[l] === 1 || validLength > 3) {
        break;
      }
      // console.log(lines[l]);
      validLength++;
    }
    return validLength === 3 ? 25 : 0;
  }

  //prettier-ignore
  #defenseThreeAdjacent25(lines) {
    const currentIndex = lines.indexOf("@");
    let l,
      r,
      validLength = 1;
    l = r = currentIndex;
    while (lines[r]) {
      r++;
      if (!lines[r] || lines[r] === " " || lines[r] === 2 || validLength > 3) {
        break;
      }
      // console.log(lines[r]);
      validLength++;
    }
    while (lines[l] && validLength < 3) {
      l--;
      if (!lines[l] || lines[l] === " " || lines[l] === 2 || validLength > 3) {
        break;
      }
      // console.log(lines[l]);
      validLength++;
    }
    return validLength === 3 ? 25 : 0;
  }

  // offense two adjacent (X,X)
  #offenseTwoAdjacent5(lines) {
    const currentIndex = lines.indexOf("@");
    if (
      lines[currentIndex + 1] === 2 ||
      lines[currentIndex - 1] === 2
    ) {
      return 5;
    } else {
      return 0;
    }
  }

  // defense two adjacent (X, O)
  #defenseTwoAdjacent2(lines) {
    const currentIndex = lines.indexOf("@");
    if (
      lines[currentIndex + 1] === 1 ||
      lines[currentIndex - 1] === 1
    ) {
      return 2;
    } else {
      return 0;
    }
  }

  // Two in  -> 5 points e.g. -> X,X,_,_ // X,_,X,_ // X,_,_,X
  #twoInFour5(lines) {}

  // (get col, row, diags, in 1 function)
  pulse(y, x, board) {
    // get row
    const row = board[y].map((cell, i, row) =>
      i === x ? "@" : cell.player || " "
    );
    // get col
    const col = [...Array(board.length)].map((_, i) => {
      return i === y ? "@" : board[i][x].player || " ";
    });
    //prettier-ignore
    const diagRight = [""].reduce(result => {
        let _y = y, _x = x;
        // Iterate until topleft -> input (unshift) into array
        while (_x > 0 && _y > 0) {
          _y--; _x--;
          result.unshift(board[_y][_x].player || " ");
        }

        // Resets the position variables
        _y = y; _x = x;

        // Iterate until bottomright ->  input (push) into array
        while (_x < board[0].length - 1 && _y < board.length - 1) {
          _y++;_x++;
          result.push(board[_y][_x].player || " ");
        }
        return result; 
      }, ["@"]);

    const diagLeft = [""].reduce(
      (result) => {
        let _y = y,
          _x = x;
        // Iterate until top right
        while (_x < board[0].length - 1 && _y > 0) {
          _y--;
          _x++;
          result.unshift(board[_y][_x].player || " ");
        }

        // Resets the position variables
        _y = y;
        _x = x;

        // Iterate until bottom left
        while (_x > 0 && _y < board.length - 1) {
          _y++;
          _x--;
          result.push(board[_y][_x].player || " ");
        }
        return result;
      },
      ["@"]
    );

    return [row, col, diagRight, diagLeft];
  }
}
export const cpu = new AIClass();
