const { expect } = require("chai");
const { polybius } = require("../src/polybius.js");

describe("polybius()", () => {
  describe("encoding", () => {
    it("should translate the letters 'i' and 'j' to '42'", () => {
      expect(polybius("ij")).to.equal("4242");
    });

    it("should ignore capital letters", () => {
      expect(polybius("ijIJazAZ")).to.equal("4242424211551155");
    });
  });

  describe("decoding", () => {
    it("should translate '42' to '(i/j)'", () => {
      expect(polybius("42", false)).to.eql("(i/j)");
    });

    it("should ignore capital letters", () => {
      expect(polybius("4242424211551155", false)).to.eql("(i/j)(i/j)(i/j)(i/j)azaz");
    });

    it("should maintain spaces", () => {
      expect(polybius("212442 1133", false)).to.eql("br(i/j) an");
    });

    it("should return false if the length of all numbers is odd", () => {
      expect(polybius("245", false)).to.be.false;
    });
  });
});
