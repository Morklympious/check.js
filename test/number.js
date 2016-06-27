/* eslint-disable no-unused-expressions */

var expect = require("chai").expect,
    number = {};

describe("Number Checking", function() {
  
  before(() => {
    require("./lib/compile")("./src/cmp/number.js", number);
  });

  describe("even(number)", function() {
    var even;

    before(() => {
      even = number.exports.even;
    });

    it("should be true for even numbers", function() {
      expect(even(2)).to.be.true;
      expect(even(168)).to.be.true;
    });

    it("should be false for non-even numbers", function() {
      expect(even(1)).to.be.false;
      expect(even(Infinity)).to.be.false;
    });
  });

  describe("odd(number)", function() {
    var odd;

    before(() => {
      odd = number.exports.odd;
    });

    it("should be true for odd numbers", function() {
      expect(odd(1)).to.be.true;
      expect(odd(177)).to.be.true;
    });

    it("should be false for non-odd numbers", function() {
      expect(odd(2)).to.be.false;
      expect(odd(NaN)).to.be.false;
    });
  });

  describe("positive(number)", function() {
    var positive;

    before(() => {
      positive = number.exports.positive;
    });

    it("should be true for numbers greater than 0", function() {
      expect(positive(50)).to.be.true;
      expect(positive(-1)).to.be.false;
      expect(positive(Infinity)).to.be.true;
    });
  });

  describe("negative(number)", function() {
    var negative;

    before(() => {
      negative = number.exports.negative;
    });

    it("should be true for numbers less than 0", function() {
      expect(negative(-1)).to.be.true;
      expect(negative(1)).to.be.false;
      expect(negative(-Infinity)).to.be.true;
    });
  });

  describe("higher(number, threshold)", function() {
    var higher;

    before(() => {
      higher = number.exports.higher;
    });

    it("should be true for numbers higher than threshold", function() {
      expect(higher(10, 5)).to.be.true;
      expect(higher(100, 99)).to.be.true;
    });

    it("should be false for numbers lower than threshold", function() {
      expect(higher(10, 12)).to.be.false;
      expect(higher(100, 1000)).to.be.false;
    });
  });

  describe("lower(number, threshold)", function() {
    var lower = number.lower;

    before(() => {
      lower = number.exports.lower;
    });

    it("should be true for numbers lower than threshold", function() {
      expect(lower(5, 10)).to.be.true;
      expect(lower(10, 100)).to.be.true;
    });

    it("should be false for numbers higher than threshold", function() {
      expect(lower(10, 5)).to.be.false;
      expect(lower(100, 10)).to.be.false;
    });
  });

  describe("within(number, min, max)", function() {
    var within;

    before(() => {
      within = number.exports.within;
    });

    it("should be true for 0 < 4 < 8", function() {
      expect(within(4, 0, 8)).to.be.true;
    });
  });

  describe("decimal(number)", function() {
    var decimal;

    before(() => {
      decimal = number.exports.decimal;
    });

    it("should have a remainder between 0 and 1 when % 1", function() {
      expect(decimal(127.4)).to.be.true;
    });
  });

  describe("integer(number)", function() {
    var integer;

    before(() => {
      integer = number.exports.integer;
    });

    it("should be true for % 1", function() {
      expect(integer(12312492)).to.be.true;
      expect(integer(12312492.4)).to.be.false;
    });
  });

  describe("finite(number)", function() {
    var finite;

    before(() => {
      finite = number.exports.finite;
    });

    it("should be true for any non-NaN number", function() {
      expect(finite(123456)).to.be.true;
    });

    it("should be false for NaN or non-number types", function() {
      expect(finite({})).to.be.false;
      expect(finite(NaN)).to.be.false;
    });
  });

  describe("infinite(number)", function() {
    var infinite = number.infinite;

    before(() => {
      infinite = number.exports.infinite;
    });

    it("should only be true for Infinity", function() {
      expect(infinite(Infinity)).to.be.true;
      expect(infinite(123)).to.be.false;
      expect(infinite([])).to.be.false;
      expect(infinite(+"50")).to.be.false;
    });
  });
});
