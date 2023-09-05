class Logic {
  constructor() {}

  // Returns an array of indexes of same
  // and consecutive elements (also the string);
  // If not found return false
  // Uses sliding window technique
  containsWinningPosition(arr, length = 4) {
    // Cleans the array
    // const cleanedArr = arr.filter(
    //   (element) => element !== " "
    // );
    let result = [];
    for (let r = 0, l = 0; r < arr.length; r++) {
      if (result.length === length) break;

      if (arr[r] === " ") {
        result = [];
        l = r;
        continue;
      }

      if (r === 0) {
        result.push([arr[r].player, arr[r].coords]);
        continue;
      }

      if (arr[r - 1].player === arr[r].player) {
        result.push([arr[r].player, arr[r].coords]);
        continue;
      }

      result = [];
      l = r;
      result.push([arr[r].player, arr[r].coords]);
    }
    return result.length === length ? result : false;
  }

  calcFallTime(y) {
    return Math.sqrt(2 * y) / 7;
  }

  wait(seconds) {
    return new Promise((resolve) => {
      setTimeout(resolve, seconds * 1000);
    });
  }
}

export const logics = new Logic();
