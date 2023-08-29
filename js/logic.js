class Logic {
  constructor() {}

  // Returns an array of indexes of same
  // and consecutive elements (also the string);
  // If not found return false
  // Uses sliding window technique
  containsWinningPosition(arr, length = 4) {
    // Cleans the array
    const cleanedArr = arr.filter(
      (element) => element !== " "
    );
    let result = [];
    for (let r = 0, l = 0; r < cleanedArr.length; r++) {
      if (r === 0) {
        result.push([r, cleanedArr[r]]);
        continue;
      }

      if (cleanedArr[r - 1] === cleanedArr[r]) {
        result.push([r, cleanedArr[r]]);
        continue;
      }

      result = [];
      l = r;
      result.push([r, cleanedArr[r]]);
    }
    // console.log(result);
    return result.length === length ? result : false;
  }

  calcFallTime(y) {
    console.log(Math.sqrt(2 * y));
    return Math.sqrt(2 * y) / 7;
  }
}

export const logics = new Logic();
