/* eslint-disable no-unused-expressions */

var expect = require("chai").expect,
    object = {}

describe("Object Checking", function() {

  before(() => {
    require("./lib/compile")("./src/cmp/object.js", object);
  });

  describe("size(obj, count)", function() {
    var size;

    before(() => {
      size = object.exports.size;
    });

     it("should be true if object has no user-defined keys", function() {
      expect(size({ one : 1 }, 1)).to.be.true;
      expect(size({}, 2)).to.be.false;
    });
  });

  describe("empty(obj)", function() {
    var empty;


    before(() => {
      empty = object.exports.empty;
    });

    it("should be true if object has no user-defined keys", function() {
      expect(empty({ one : 1 })).to.be.false;
      expect(empty({})).to.be.true;
    });
  });

  describe("contains(obj, prop)", function() {
    var contains;

    before(() => {
      contains = object.exports.contains;
    });

    it("should be true if prop is in object", function() {
      expect(contains({ one : 1 }, "one")).to.be.true;
    });
  });
});
