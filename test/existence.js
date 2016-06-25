/* eslint-disable no-unused-expressions */

var expect = require("chai").expect,
    existence  = require("../src/cmp/existence.js"),
    undef;

describe("Existence Checking", function() {
  describe("exists(value)", function() {
    var exists = existence.exists;

    it("should be false for undefined value", function() {
      expect(exists(undef)).to.be.false;
    });

    it("should be false for null value", function() {
      expect(exists(null)).to.be.false;
    });

    it("should be true for empty data structures", function() {
      expect(exists({})).to.be.true;
      expect(exists([])).to.be.true;
    });

    it("should be true for both boolean values", function() {
      expect(exists(false)).to.be.true;
      expect(exists(true)).to.be.true;
    });

    it("should be true for empty string", function() {
      expect(exists("")).to.be.true;
    });

    it("should be true for NaN", function() {
      expect(exists(NaN)).to.be.true;
    });

    it("should be true for 0", function() {
      expect(exists(0)).to.be.true;
    });
  });

  describe("truthy(value)", function() {
    var truthy = existence.truthy;

    it("should be false for undefined value", function() {
      expect(truthy(undef)).to.be.false;
    });

    it("should be false for null value", function() {
      expect(truthy(null)).to.be.false;
    });

    it("should be false for empty string", function() {
      expect(truthy("")).to.be.false;
    });

    it("should be false for NaN", function() {
      expect(truthy(NaN)).to.be.false;
    });

    it("should be false for 0", function() {
      expect(truthy(0)).to.be.false;
    });
  });

  describe("falsey(value)", function() {
    var falsey = existence.falsey;

    it("should be true for undefined value", function() {
      expect(falsey(undef)).to.be.true;
    });

    it("should be true for null value", function() {
      expect(falsey(null)).to.be.true;
    });

    it("should be true for empty string", function() {
      expect(falsey("")).to.be.true;
    });

    it("should be true for NaN", function() {
      expect(falsey(NaN)).to.be.true;
    });

    it("should be true for 0", function() {
      expect(falsey(0)).to.be.true;
    });
  });
});
