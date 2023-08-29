import { logics } from "./logic";
import redCell from "../images/counter-red-large.svg";
import yellowCell from "../images/counter-yellow-large.svg";

const cell = {
  player: "O",
  coords: [2, 3],
};

class GameboardClass {
  #gameboardDOM = document.querySelector(".board__content");
  //prettier-ignore
  gameboard = [ [" ", " ", " ", " ", " ", " "], 
                [" ", " ", " ", " ", " ", " "], 
                [" ", "1", " ", " ", " ", " "], 
                [" ", "1", " ", " ", " ", " "],
                [" ", "1", " ", " ", " ", " "],
                [" ", "1", " ", " ", " ", " "] ];
  constructor() {
    this.dropCell(3, 1, 1);
    // this.init(6, 7);
  }

  // Automatically div elements that can be clicked.
  init(width, height) {
    for(let x = 0; x < width; x++) {
      for(let y = 0; y < height; y++) {
        const html = `
        
        `
      }
    }
  };

  get #height() {
    return this.gameboard.length;
  }
  

  get #width() {
    return this.gameboard[0].length;
  }

  #rowOf(y, x) {
    return this.gameboard[y];
  }

  #columnOf(y, x) {
    return [...Array(this.#height)].map(
      (_, i) => this.gameboard[i][x]
    );
  }

  // Diagonal right is "\" (Down + Right)
  #diagonalRightOf(yCoords, xCoords) {
    let result = [this.gameboard[yCoords][xCoords]];

    let y = yCoords,
      x = xCoords;

    // Iterate until topleft -> input (unshift) into array
    while (x > 0 && y > 0) {
      y--;
      x--;
      result.unshift(this.gameboard[y][x]);
    }

    // Resets the position variables
    y = yCoords;
    x = xCoords;

    // Iterate until bottomright ->  input (push) into array
    while (x < this.#width - 1 && y < this.#height - 1) {
      y++;
      x++;
      result.push(this.gameboard[y][x]);
    }
    return result;
  }

  // Diagonal left is "/" (Down + Left)
  #diagonalLeftOf(yCoords, xCoords) {
    let result = [this.gameboard[yCoords][xCoords]];

    let y = yCoords,
      x = xCoords;

    // Iterate until top right
    while (x < this.#width - 1 && y > 0) {
      y--;
      x++;
      result.unshift(this.gameboard[y][x]);
    }

    // Resets the position variables
    y = yCoords;
    x = xCoords;

    // Iterate until bottom left
    while (x > 0 && y < this.#height - 1) {
      y++;
      x--;
      result.push(this.gameboard[y][x]);
    }
    return result;
  }

  // New Cells will always fill the bottom of the column first
  dropCell(y, x, player) {
    // The i >= -1 is so that the loop will go from the height -> -1
    // Whenever it hits -1 it means that there are no longer any available space on the column

    // Checks for the highest available spot on the column
    for (let i = this.#height - 1; i >= -1; i--) {
      // Checks if the board is already filled to the top
      if (i === -1) return console.log("COLUMN IS FULL");

      // If current el on column is empty the continue
      if (this.gameboard[i][x] !== " ") continue;

      // If current el IS NOT empty then set it to the y position
      y = i;
      break;
    }

    this.gameboard[y][x] = player.toString();
    console.log(y, x);
    this.renderCell(y, x, player);
    this.#checkWin([y, x]);
  }

  //prettier-ignore
  #checkWin(recentPlacement) {
    const [y, x] = recentPlacement;

    // Checks winning conditions.
    const result = 
      logics.containsWinningPosition(this.#rowOf(y, x)) ||
      logics.containsWinningPosition(this.#columnOf(y, x)) ||
      logics.containsWinningPosition(this.#diagonalRightOf(y, x)) ||
      logics.containsWinningPosition(this.#diagonalLeftOf(y, x)) || 
      false;
      console.log(result);
  }

  renderCell(y, x, player) {
    const cellColor = player === 1 ? redCell : yellowCell;
    const cellHtml = `
    <div class="cell" data-coords="${y},${x}">
      <img src=${cellColor} alt="cell"/>
    </div>
    `;

    this.#gameboardDOM.insertAdjacentHTML(
      "afterbegin",
      cellHtml
    );

    const newCell = document.querySelector(
      `[data-coords="${y},${x}"]`
    );
    newCell.style.setProperty("--x", x);
    newCell.style.setProperty(
      "--fall-time",
      `${logics.calcFallTime(y)}s`
    );

    // Animates the transition
    requestAnimationFrame(() => {
      newCell.style.setProperty("--x", x);
      newCell.style.setProperty("--y", y);
    });
  }
}

const gameboard = new GameboardClass();
