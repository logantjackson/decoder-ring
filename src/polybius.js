const polybiusModule = (function () {
  function polybius(input, encode = true) {
 
    let square = [
      ["a", "b", "c", "d", "e"],
      ["f", "g", "h", "(i/j)", "k"],
      ["l", "m", "n", "o", "p"],
      ["q", "r", "s", "t", "u"],
      ["v", "w", "x", "y", "z", " "],
    ];

    let result;

    if (encode) {
      let inputArray = input.split("");
      let fixedInputArray = inputArray.map((string) => {
        let lowCase = string.toLowerCase();
        if (lowCase === "i" || lowCase === "j") {
          return "(i/j)";
        }
        return lowCase;
      });

      let xArr = [];
      let yArr = fixedInputArray.map((letter) => {
        for (let i = 0; i < square.length; i++) {
          const row = square[i];
          if (row.find((alpha) => alpha === letter)) {
            xArr.push(i + 1);
            return row.indexOf(letter) + 1;
          }
        }
      });

      result = xArr.reduce((acc, xValue, index) => {
        let pair = `${yArr[index]}${xValue}`;
        if (pair === "65") {
          pair = " ";
        }
        acc.push(pair);
        return acc;
      }, []);
    }

    if (!encode) {
      let spacesAdded = input.replace(/ /g, "65");
      if (spacesAdded.length % 2 !== 0) return false;
      let coordinates = spacesAdded.match(/..?/g);
      result = coordinates.map((yx) => {
        let rowIndex = yx.split("")[1] - 1;
        let columnIndex = yx.split("")[0] - 1;
        return square[rowIndex][columnIndex];
      });
    }
    return result.join("");
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule;
