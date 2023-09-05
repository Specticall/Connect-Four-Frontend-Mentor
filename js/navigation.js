import { game } from "./game";

class PauseClass {
  #btnContinue = document.querySelector(".btn__continue");
  #btnRestart = document.querySelector(
    ".btn__restart[data-where='pause-menu']"
  );
  #btnMenu = document.querySelector(".btn__menu");
  #dropIndicator = document.querySelector(
    ".drop-indicator"
  );
  #pauseMenu = document.querySelector(".pause");
  constructor() {
    this.#btnMenu.addEventListener(
      "click",
      this.togglePauseMenu.bind(this)
    );

    this.#pauseMenu.addEventListener(
      "click",
      this.closePauseMenu.bind(this)
    );

    this.#btnContinue.addEventListener(
      "click",
      this.togglePauseMenu.bind(this)
    );

    this.#btnRestart.addEventListener(
      "click",
      this.resetGame.bind(this)
    );
  }

  togglePauseMenu() {
    this.#pauseMenu.classList.contains("pause-game")
      ? game.startTimer()
      : game.stopTimer();
    this.#pauseMenu.classList.toggle("pause-game");
    this.#dropIndicator.classList.toggle("oscilates");
  }

  closePauseMenu(e) {
    if (!e.target.classList.contains("pause")) return;
    this.togglePauseMenu();
  }

  resetGame() {
    game.reset();
    this.#pauseMenu.classList.toggle("pause-game");
    this.#dropIndicator.classList.toggle("oscilates");
  }
}

export const menuPause = new PauseClass();
