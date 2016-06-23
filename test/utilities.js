/* eslint-disable no-unused-expressions */

var expect = require("chai").expect,
    util   = require("../src/components/utilities.js");


describe("Utility Checks", function() {
  describe("not(value)", function() {
    var not = util.not;

    it("should be true for falsey values", function() {
      expect(not(false)).to.be.true;
      expect(not(true)).to.be.false;
    });
  });

  describe("argen(args)", function() {
    var argen = util.argen;

    function store() {
      var args = argen(arguments);

      expect(args).to.eql( [ 1, 2, 3, 4, 5 ] );
    }
    store(1, 2, 3, 4, 5);
  });

  describe("forge(fn)", function() {
    var forge = util.forge;

    var plusFive = forge(function(a, b) {
      return a + b;
    }, 5);

    it("should partially apply function arguments", function() {
      expect(plusFive(6)).to.equal(11);
      expect(plusFive(0)).to.equal(5);
    });
  });
});
