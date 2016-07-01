/* eslint-disable no-unused-expressions */

var expect = require("chai").expect,
    buble  = require("buble"),
    util = {};

describe("Utility Checks", () => {

  before(() => {
    require("./lib/compile")("./src/cmp/utilities.js", util);
  });

  describe("not(value)", () => {
    var not;

    before(() => {
      not = util.exports.not;
    });

    it("should be true for falsey values", () => {
      expect(not(false)).to.be.true;
      expect(not(true)).to.be.false;
    });
  });

  describe("argen(args)", () => {
    var argen;

    before(() => {
      argen = util.exports.argen;
    });

    function store() {
      var args = argen(arguments);
      return args;
    }

    it("should capture agruments as an array", () => {
      expect(argen(store(1,2,3,4,5))).to.eql( [ 1, 2, 3, 4, 5 ] );
    });
  });

  describe("forge(fn)", () => {
    var forge;

    before(() => {
      forge = util.exports.forge;
    });


    it("should partially apply function arguments", () => {
      var plusFive = forge(function(a, b) {
        return a + b;
      }, 5);

      expect(plusFive(6)).to.equal(11);
      expect(plusFive(0)).to.equal(5);
    });
  });
});
