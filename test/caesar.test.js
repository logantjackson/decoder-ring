const assert = require('assert');
const { caesar } = require('../src/caesar.js');

describe('Caesar Cipher', function () {
  it('should encode "thinkful" with a shift of 3', function () {
    assert.strictEqual(caesar("thinkful", 3), 'wklqnixo');
  });

  it('should decode "thinkful" with a shift of -3', function () {
    assert.strictEqual(caesar("thinkful", -3), 'qefkhcri');
  });

  it('should decode "wklqnixo" with a shift of 3', function () {
    assert.strictEqual(caesar("wklqnixo", 3, false), 'thinkful');
  });

  it('should encode "This is a secret message!" with a shift of 8', function () {
    assert.strictEqual(
      caesar("This is a secret message!", 8),
      'bpqa qa i amkzmb umaaiom!'
    );
  });

  it('should encode "Zebra Magazine" with a shift of 3', function () {
    assert.strictEqual(
      caesar("Zebra Magazine", 3),
      'cheud pdjdclqh'
    );
  });

  it('should decode "BPQA qa I amkzmb umaaiom!" with a shift of 8', function () {
    assert.strictEqual(
      caesar("BPQA qa I amkzmb umaaiom!", 8, false),
      'this is a secret message!'
    );
  });

  it('should return false for invalid shift values', function () {
    assert.strictEqual(caesar("thinkful"), false);
    assert.strictEqual(caesar("thinkful", 99), false);
    assert.strictEqual(caesar("thinkful", -26), false);
  });
});
