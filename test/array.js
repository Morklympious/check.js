/* eslint-disable no-unused-expressions */

var expect = require("chai").expect,
    array  = {};


describe("Array Checking", function() {

  before(() => {
   require("./lib/compile")("./src/cmp/array.js", array).then(() => console.log('ARRAY BABY',array));
  });

  describe("contains(collection, value)", function() {
    var contains;

    before(() => {
      contains = array.exports.contains;
    });

    it("should be a function", function() {
      expect(contains).to.be.a("function");
    });

    it("should return false on empty array", function() {
      expect(contains([], 1)).to.be.false;
    });

    it("should return false on array without matching element", function() {
      expect(contains([ 1, 2, 3 ], 5)).to.be.false;
    });

    it("should return true on array with matching element", function() {
      expect(contains([ 1, 2, 3 ], 3)).to.be.true;
    });
  });

  describe("empty(collection)", function() {
    var empty;

    before(() => {
      empty = array.exports.empty;
    });

    it("should be a function", function() {
      expect(empty).to.be.a("function");
    });

    it("should return true for empty array", function() {
      expect(empty([])).to.be.true;
    });

    it("should return false on array with elements", function() {
      expect(empty([ 1, 2, 3 ])).to.be.false;
    });
  });
});
