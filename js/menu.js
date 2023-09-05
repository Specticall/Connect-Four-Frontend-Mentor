import "core-js/stable";
import "regenerator-runtime";

class MainMenuClass {
  #vsCPUBtn = document.querySelector(".btn__pve");
  #vsPlayerBtn = document.querySelector(".btn__pvp");
  constructor() {
    this.#vsCPUBtn.addEventListener("click", () => {
      this.setGametype("vsCPU");
    });
    this.#vsPlayerBtn.addEventListener("click", () => {
      this.setGametype("vsPlayer");
    });
  }

  setGametype(type) {
    sessionStorage.setItem("selectedGame", type);
  }
}

const mainMenu = new MainMenuClass();
