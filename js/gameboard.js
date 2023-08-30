import { logics } from "./logic";
import { cellValue } from "./cells";
import { game } from "./game";
import { cell } from "./cells";

// const cell = {
//   player: 1,
//   coords: [2, 3],
// };

class GameboardClass {
  #gameboardDOM = document.querySelector(".board__content");
  #gameboardInput = document.querySelector(".board__input");
  #dropIndicator = document.querySelector(
    ".drop-indicator"
  );
  gameboard;
  // Used to stop inputs from happening whenever there is an animation.
  #ongoingAnimation = false;

  constructor() {
    // this.init(6, 7);

    // Event listener that registers input
    this.#gameboardInput.addEventListener(
      "click",
      this.#clickCell.bind(this)
    );

    // //////// DEV CODE ///////////////
    // this.dropCell(3, 1, 2);

    ////////////////////////////////////
  }

  // Initialize the board.
  // Note that height and width SHOULD NOT BE CHANGED.
  async init(height, width) {
    await this.#clearBoard();
    // Initialize empty gameboard
    this.gameboard = [...Array(height)].map((el) =>
      Array(width).fill(" ")
    );

    // Automatically div elements that can be clicked.
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const html = `
        <div class="cell__hidden" data-coords="${y},${x}"></div>
        `;
        this.#gameboardInput.insertAdjacentHTML(
          "beforeend",
          html
        );
      }
    }
  }

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

  // NOTE : New Cells will always fill the bottom of the column first
  async dropCell(y, x, player) {
    this.#ongoingAnimation = true;

    // The i >= -1 is so that the loop will go from the height -> -1
    // If it ever hits -1 it means that there are no longer any available space on the column

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

    // Insert the player input into the object array
    this.gameboard[y][x] = new cellValue(player, [y, x]);

    // Waits for cell render animation to finish
    await this.#renderCell(y, x, player);

    // Checks if the recent move created a winning position
    this.#checkWin([y, x]);

    game.switchTurns();

    this.#ongoingAnimation = false;
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

  async #renderCell(y, x, player) {
    return new Promise((resolve) => {
      const cellColor =
        player === 1 ? cell.redCell : cell.yellowCell;
      const cellHtml = `
      <div class="cell" data-coords="${y},${x}" data-x="${x}", data-y="${y}" data-player="${player}">
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
      newCell.style.setProperty("--y", y);
      newCell.style.setProperty(
        "--fall-time",
        `${logics.calcFallTime(y)}s`
      );

      newCell.addEventListener("animationend", resolve);
    });
  }

  #clickCell(e) {
    const cell = e.target.closest(".cell__hidden");

    if (!cell) return;

    if (this.#ongoingAnimation)
      return console.log("ANIMATION STILL ONGOING");

    const [y, x] = cell.dataset.coords
      .split(",")
      .map((el) => Number(el));

    this.dropCell(y, x, game.player);
  }

  #clearBoard() {
    return new Promise(async (resolve) => {
      this.#gameboardInput.innerHTML = "";

      [...this.#gameboardDOM.children].forEach((cell) => {
        cell.style.opacity = "0";
      });

      await logics.wait(0.25);

      this.#gameboardDOM.innerHTML = "";
      resolve();
    });
  }
}

export const gameboard = new GameboardClass();
