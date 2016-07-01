/* eslint-disable no-unused-expressions */

var expect = require("chai").expect,
    existence  = {},
    undef;

describe("Existence Checking", () => {

  before(() => {
    require("./lib/compile")("./src/cmp/existence.js", existence);
  });

  describe("exists(value)", () => {
    var exists;

    before(() => {
      exists = existence.exports.exists;
    });

    it("should be false for undefined value", () => {
      expect(exists(undef)).to.be.false;
    });

    it("should be false for null value", () => {
      expect(exists(null)).to.be.false;
    });

    it("should be true for empty data structures", () => {
      expect(exists({})).to.be.true;
      expect(exists([])).to.be.true;
    });

    it("should be true for both boolean values", () => {
      expect(exists(false)).to.be.true;
      expect(exists(true)).to.be.true;
    });

    it("should be true for empty string", () => {
      expect(exists("")).to.be.true;
    });

    it("should be true for NaN", () => {
      expect(exists(NaN)).to.be.true;
    });

    it("should be true for 0", () => {
      expect(exists(0)).to.be.true;
    });
  });

  describe("truthy(value)", () => {
    var truthy;

    before(() => {
      truthy = existence.exports.truthy;
    });

    it("should be false for undefined value", () => {
      expect(truthy(undef)).to.be.false;
    });

    it("should be false for null value", () => {
      expect(truthy(null)).to.be.false;
    });

    it("should be false for empty string", () => {
      expect(truthy("")).to.be.false;
    });

    it("should be false for NaN", () => {
      expect(truthy(NaN)).to.be.false;
    });

    it("should be false for 0", () => {
      expect(truthy(0)).to.be.false;
    });
  });

  describe("falsey(value)", () => {
    var falsey;

    before(() => {
      falsey = existence.exports.falsey;
    });

    it("should be true for undefined value", () => {
      expect(falsey(undef)).to.be.true;
    });

    it("should be true for null value", () => {
      expect(falsey(null)).to.be.true;
    });

    it("should be true for empty string", () => {
      expect(falsey("")).to.be.true;
    });

    it("should be true for NaN", () => {
      expect(falsey(NaN)).to.be.true;
    });

    it("should be true for 0", () => {
      expect(falsey(0)).to.be.true;
    });
  });
});
