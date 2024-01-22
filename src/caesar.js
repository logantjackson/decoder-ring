function caesar(input, shift, encode = true) {
  if (typeof shift !== 'number' || shift === 0 || shift < -25 || shift > 25) {
    return false;
  }

  const lowerInput = input.toLowerCase();
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  let result = '';

  for (let i = 0; i < lowerInput.length; i++) {
    const currentChar = lowerInput[i];
    if (alphabet.includes(currentChar)) {
      const index = alphabet.indexOf(currentChar);

      let shiftedIndex;
      if (encode) {
        shiftedIndex = (index + shift) % 26;
      } else {
        shiftedIndex = (index - shift) % 26;
      }

      if (shiftedIndex < 0) {
        shiftedIndex += 26;
      }
      result += alphabet[shiftedIndex];
    } else {
      result += currentChar;
    }
  }

  return result;
}

module.exports = { caesar };
