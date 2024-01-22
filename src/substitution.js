const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false;

    const realAlphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
    const inputArray = input.toLowerCase().split("");
    const subAlphabetArray = alphabet.toLowerCase().split("");

    const onlyUniqueChars = subAlphabetArray.filter(
      (item, index, self) => self.indexOf(item) === index
    );
    if (onlyUniqueChars.length !== alphabet.length) return false;

    const encodeMessage = () => {
      let result = [];
      const encode = (char) => {
        const charIndex = realAlphabetArray.indexOf(char);
        const encodedChar = subAlphabetArray[charIndex];
        result.push(encodedChar);
      };
      inputArray.forEach((char) => {
        char === " " ? result.push(" ") : encode(char);
      });
      return result.join("");
    };

    const decodeMessage = () => {
      let result = [];
      const decode = (char) => {
        const charIndex = subAlphabetArray.indexOf(char);
        const decodedChar = realAlphabetArray[charIndex];
        result.push(decodedChar);
      };
      inputArray.forEach((char) => {
        char === " " ? result.push(" ") : decode(char);
      });
      return result.join("");
    };
    return encode ? encodeMessage() : decodeMessage();
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule;
