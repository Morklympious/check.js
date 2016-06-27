/* eslint-disable no-unused-expressions */

var expect = require("chai").expect,
    util = {};



describe("Utility Checks", function() {

  before(() => require("./lib/compile")("./src/cmp/utilities.js", util));

  describe("not(value)", function() {
    var not;

    before(() => {
      not = util.exports.not;
    });

    it("should be true for falsey values", function() {
      expect(not(false)).to.be.true;
      expect(not(true)).to.be.false;
    });
  });

  describe("argen(args)", function() {
    var argen;

    before(() => {
      argen = util.exports.argen;
    });

    it("should capture arguments", function() {

      function store() {
        var args = argen(arguments);

        return args;
      }

      expect(store(1, 2, 3, 4, 5)).to.eql( [ 1, 2, 3, 4, 5 ] );
    });
  });

  describe("forge(fn)", function() {
    var forge;

    before(() => {
      forge = util.exports.forge;
    });

    it("should partially apply function arguments", function() {
      var plusFive = forge(function(a, b) {
        return a + b;
      }, 5);

      expect(plusFive(6)).to.equal(11);
      expect(plusFive(0)).to.equal(5);
    });
  });

});
