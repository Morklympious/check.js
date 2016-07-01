/* eslint-disable no-unused-expressions */

var expect = require("chai").expect,
    object = {}

describe("Object Checking", () => {

  before(() => {
    require("./lib/compile")("./src/cmp/object.js", object);
  });

  describe("size(obj, count)", () => {
    var size;

    before(() => {
      size = object.exports.size;
    });

     it("should be true if object has no user-defined keys", () => {
      expect(size({ one : 1 }, 1)).to.be.true;
      expect(size({}, 2)).to.be.false;
    });
  });

  describe("empty(obj)", () => {
    var empty;


    before(() => {
      empty = object.exports.empty;
    });

    it("should be true if object has no user-defined keys", () => {
      expect(empty({ one : 1 })).to.be.false;
      expect(empty({})).to.be.true;
    });
  });

  describe("contains(obj, prop)", () => {
    var contains;

    before(() => {
      contains = object.exports.contains;
    });

    it("should be true if prop is in object", () => {
      expect(contains({ one : 1 }, "one")).to.be.true;
    });
  });
});
