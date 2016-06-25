/* eslint-disable no-unused-expressions */

var expect = require("chai").expect,
    object = require("../src/cmp/object.js");

describe("Object Checking", function() {
  describe("size(obj, count)", function() {
    var size = object.size;

     it("should be true if object has no user-defined keys", function() {
      expect(size({ one : 1 }, 1)).to.be.true;
      expect(size({}, 2)).to.be.false;
    });
  });

  describe("empty(obj)", function() {
    var empty = object.empty;

    it("should be true if object has no user-defined keys", function() {
      expect(empty({ one : 1 })).to.be.false;
      expect(empty({})).to.be.true;
    });
  });

  describe("contains(obj, prop)", function() {
    var contains = object.contains;

    it("should be true if prop is in object", function() {
      expect(contains({ one : 1 }, "one")).to.be.true;
      expect(contains(object, "contains")).to.be.true;
    });
  });
});
