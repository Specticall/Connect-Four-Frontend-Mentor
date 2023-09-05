import redCellLarge from "../images/counter-red-large.svg";
import yellowCellLarge from "../images/counter-yellow-large.svg";
import redCellSmall from "../images/counter-red-small.svg";
import yellowCellSmall from "../images/counter-yellow-small.svg";
import boardWhiteLarge from "../images/board-layer-white-large.svg";
import boardWhiteSmall from "../images/board-layer-white-small.svg";

// Handles the images (changes on certain viewports)
class ResponsiveClass {
  #boardContent = document.querySelector(".board__content");
  #boardWhiteDOM = document.querySelector(".board__white");
  #currentViewport;
  constructor() {
    this.#detectViewport();

    // Listen to any change in viewport
    window.addEventListener(
      "resize",
      this.#detectViewport.bind(this)
    );
  }

  #detectViewport() {
    const viewportNow =
      window.innerWidth < 500 ? "MOBILE" : "DESKTOP";

    // If there is no change in viewport then return
    if (this.#currentViewport === viewportNow) return;

    // Sets the viewport on the object itself
    this.#currentViewport = viewportNow;

    // Change the cell image based on the viewport size
    this.#changeImages();
  }

  #changeImages() {
    // Change Cells
    [...this.#boardContent.children].forEach((cell) => {
      const player = cell.dataset.player;

      cell.children[0].src =
        player === "1" ? this.redCell : this.yellowCell;
    });

    // Change board
    this.#boardWhiteDOM.src = this.boardWhite;
  }

  get boardWhite() {
    return this.#currentViewport === "DESKTOP"
      ? boardWhiteLarge
      : boardWhiteSmall;
  }

  get redCell() {
    return this.#currentViewport === "DESKTOP"
      ? redCellLarge
      : redCellSmall;
  }

  get yellowCell() {
    return this.#currentViewport === "DESKTOP"
      ? yellowCellLarge
      : yellowCellSmall;
  }
}

export class cellValue {
  constructor(player, coords) {
    this.player = player;
    this.coords = coords;
  }
}

export const images = new ResponsiveClass();
