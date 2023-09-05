import { cpu } from "./ai";
import { gameboard } from "./gameboard";
import redTurnImage from "../images/turn-background-red.svg";
import yellowTurnImage from "../images/turn-background-yellow.svg";
import redTurnIndicator from "../images/marker-red.svg";
import yellowTurnIndicator from "../images/marker-yellow.svg";
import cpuIcon from "../images/cpu.svg";
import player2Icon from "../images/player-two.svg";

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

  #playerTurnContainer = document.querySelector(
    ".current__player"
  );

  #dropIndicator = document.querySelector(
    ".drop-indicator"
  );

  #backdrop = document.querySelector(".backdrop");
  #backdropBottom = document.querySelector(
    ".backdrop__bottom"
  );

  #player1PointDOM = document.querySelector(
    ".score[data-player='1']"
  );
  #player2PointDOM = document.querySelector(
    ".score[data-player='2']"
  );

  #playerWinScreen = document.querySelector(
    ".player__winner"
  );

  #restartBtn = document.querySelector(
    ".btn__restart[data-where='nav']"
  );

  #playAgainBtn = document.querySelector(".btn__again");

  // Player state
  #currentPlayer = 1;

  //Timer
  #time = 30;
  #timer;

  // Points
  #pointPlayer1 = 0;
  #pointPlayer2 = 0;

  // Game type
  #gameType;

  constructor() {
    this.#restartBtn.addEventListener(
      "click",
      this.#resetGame.bind(this)
    );
    this.#playAgainBtn.addEventListener(
      "click",
      this.#restartGame.bind(this)
    );

    // Start game after everything finishes loading.
    window.addEventListener("DOMContentLoaded", () => {
      this.loadGameType();
      this.startGame();
    });
  }

  loadGameType() {
    this.#gameType = sessionStorage.getItem("selectedGame");
  }

  startGame() {
    // Clears the board
    gameboard.init(6, 7);

    // Sets the timer
    this.#playerTimer.textContent = `${this.#time}S`;

    // set current player to 1
    this.#currentPlayer = 1;

    // Sets the timer
    this.startTimer();
    this.#setTurnIndicator();

    // Display the drop indicator
    this.#dropIndicator.classList.remove("hidden");

    // set backdrop color to default
    this.#backdrop.classList.remove("yellow");
    this.#backdrop.classList.remove("red");
    this.#backdropBottom.classList.remove("yellow");
    this.#backdropBottom.classList.remove("red");

    // Sets the player score
    this.#player1PointDOM.textContent = this.#pointPlayer1;
    this.#player2PointDOM.textContent = this.#pointPlayer2;

    // Change text & image for the second player in accordance to the selected mode (cpu / pvp)
    document
      .querySelector("[data-player='2']")
      .querySelector("p").textContent =
      this.#gameType === "vsCPU" ? "CPU" : "PLAYER 2";
    document
      .querySelector("[data-player='2']")
      .querySelector("img").src =
      this.#gameType === "vsCPU" ? cpuIcon : player2Icon;

    // Adds the move event listener (for top indicator)
    this.#boardInput.addEventListener(
      "mousemove",
      this.#moveDropIndicator.bind(this)
    );
  }

  startTimer() {
    this.#timer = setInterval(() => {
      // Reduce timer
      this.#time--;

      // Updates the DOM timer with the object timer
      this.#playerTimer.textContent = `${this.#time}S`;

      // Stop timer if it hits 0
      if (this.#time === -1) {
        this.stopTimer();
        this.switchTurns();
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.#timer);
  }

  #restartGame() {
    // Resets the timer to default position
    this.stopTimer();
    this.#time = 30;
    this.#playerTimer.textContent = `${this.#time}S`;

    // Initializes the game
    this.startGame();

    // Toggle from the botto win screen to the turn screen
    this.#playerTurnContainer.classList.remove("hidden");
    this.#playerTurnContainer.classList.remove("disappear");
    this.#playerWinScreen.classList.add("hidden");
    this.#playerWinScreen.classList.remove("appear");

    // Remove player icon animation
    //prettier-ignore
    document
      .querySelector(`.player__score[data-player="1"] > .player__icon`)
      .classList.remove("iconAnimate");
    //prettier-ignore
    document
      .querySelector(`.player__score[data-player="2"] > .player__icon`)
      .classList.remove("iconAnimate");
  }

  // Restart + Reset score
  #resetGame() {
    this.#pointPlayer1 = 0;
    this.#pointPlayer2 = 0;
    this.#restartGame();
  }

  // API purposes
  restart() {
    this.#restartGame();
  }

  reset() {
    this.#resetGame();
  }

  switchTurns() {
    // Switch player turn
    this.#currentPlayer = this.#currentPlayer === 1 ? 2 : 1;

    // Restarts the timer
    clearInterval(this.#timer);
    this.#time = 30;
    this.#playerTimer.textContent = `${this.#time}S`;
    this.startTimer();

    // Display the current player
    this.#setTurnIndicator();

    if (
      this.#currentPlayer === 2 &&
      this.#gameType === "vsCPU"
    ) {
      const { coords } = cpu.getBestMove(
        gameboard.gameboard
      );
      const [y, x] = coords;
      gameboard.dropCell(y, x, 2, true);
    }
  }

  addPointToPlayer(player) {
    player === 1
      ? this.#pointPlayer1++
      : this.#pointPlayer2++;

    // Sets the player score
    this.#player1PointDOM.textContent = this.#pointPlayer1;
    this.#player2PointDOM.textContent = this.#pointPlayer2;
  }

  // Switch the turn indicator to current player
  #setTurnIndicator() {
    // Change text
    this.#playerTurnText.textContent = `PLAYER ${
      this.#currentPlayer
    }'S TURN`;

    this.#playerTurnText.style.color =
      this.#currentPlayer === 1
        ? "var(--clr-white)"
        : "var(--clr-black)";

    this.#playerTimer.style.color =
      this.#currentPlayer === 1
        ? "var(--clr-white)"
        : "var(--clr-black)";

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

  displayWinScreen(playerWinner = "tie") {
    // switch from turn display to win display
    this.#playerTurnContainer.classList.add("hidden");
    this.#playerWinScreen.classList.remove("hidden");

    if (playerWinner === "tie") {
      this.#playerWinScreen.querySelector(
        "p"
      ).textContent = `IT'S A`;
      this.#playerWinScreen.querySelector(
        "h2"
      ).textContent = "DRAW";

      return;
    }

    // Change the players name
    this.#playerWinScreen.querySelector(
      "p"
    ).textContent = `PLAYER ${playerWinner}`;

    this.#backdrop.classList.add(
      playerWinner === 1 ? "red" : "yellow"
    );
    this.#backdropBottom.classList.add(
      playerWinner === 1 ? "red" : "yellow"
    );
    this.#playerWinScreen.querySelector("h2").textContent =
      "WINS";

    // Animate Player Icon Bouncing
    const icon = document.querySelector(
      `.player__score[data-player="${playerWinner}"] > .player__icon`
    );
    icon.classList.add("iconAnimate");
  }

  get player() {
    return this.#currentPlayer;
  }
}

export const game = new GameClass();
