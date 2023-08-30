import { gameboard } from "./gameboard";
import redTurnImage from "../images/turn-background-red.svg";
import yellowTurnImage from "../images/turn-background-yellow.svg";
import redTurnIndicator from "../images/marker-red.svg";
import yellowTurnIndicator from "../images/marker-yellow.svg";

class GameClass {
  // At the start of the game, it is player 1's turn
  #boardInput = document.querySelector(".board__input");

  #playerTimer = document.querySelector(
    ".current__player--timer"
  );

  #playerTurnText = document.querySelector(
    ".current__player--indicator"
  );

  #playerTurnImage = document.querySelector(
    ".current__player--image"
  );

  #dropIndicator = document.querySelector(
    ".drop-indicator"
  );

  #restartBtn = document.querySelector(".btn__restart");
  #currentPlayer = 1;
  #time = 5;
  #timer;

  constructor(time) {
    this.#restartBtn.addEventListener(
      "click",
      this.#restartGame.bind(this)
    );

    // Start game after everything finishes loading.
    window.addEventListener("DOMContentLoaded", () => {
      this.startGame();
    });
  }

  startGame() {
    // Clears the board
    gameboard.init(6, 7);

    // Sets the timer
    this.#playerTimer.textContent = `${this.#time}S`;

    // Sets the timer
    this.#startTimer();
    this.#setTurnIndicator();

    // Display the drop indicator
    this.#dropIndicator.classList.remove("hidden");

    // Adds the move event listener (for top indicator)
    this.#boardInput.addEventListener(
      "mousemove",
      this.#moveDropIndicator.bind(this)
    );
  }

  #startTimer() {
    this.#timer = setInterval(() => {
      // Reduce timer
      this.#time--;

      // Updates the DOM timer with the object timer
      this.#playerTimer.textContent = `${this.#time}S`;

      // Stop timer if it hits 0
      if (this.#time !== -1) return;
      this.#stopTimer();
      this.switchTurns();
    }, 1000);
  }

  #stopTimer() {
    clearInterval(this.#timer);
  }

  #restartGame() {
    this.#playerTimer.textContent = `${this.#time}S`;
    this.#stopTimer();
    this.startGame();
  }

  switchTurns() {
    // Switch player turn
    this.#currentPlayer = this.#currentPlayer === 1 ? 2 : 1;

    // Restarts the timer
    clearInterval(this.#timer);
    this.#time = 5;
    this.#playerTimer.textContent = `${this.#time}S`;
    this.#startTimer();

    // Display the current player
    this.#setTurnIndicator();
  }

  #setTurnIndicator() {
    // Change text
    this.#playerTurnText.textContent = `PLAYER ${
      this.#currentPlayer
    }'S TURN`;

    // Change image
    this.#playerTurnImage.src =
      this.#currentPlayer === 1
        ? redTurnImage
        : yellowTurnImage;

    this.#dropIndicator.src =
      this.#currentPlayer === 1
        ? redTurnIndicator
        : yellowTurnIndicator;
  }

  #moveDropIndicator(e) {
    const cell = e.target.closest(".cell__hidden");

    if (!cell) return;

    const x = cell.dataset.coords.split(",")[1];

    this.#dropIndicator.style.setProperty("--x", x);
  }

  get player() {
    return this.#currentPlayer;
  }
}

export const game = new GameClass();
