class GameClass {
  // At the start of the game, it is player 1's turn
  #currentPlayer = 1;
  constructor() {}

  switchTurns() {
    this.#currentPlayer = this.#currentPlayer === 1 ? 2 : 1;
  }
}

export const game = new GameClass();
