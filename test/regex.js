/* eslint-disable no-unused-expressions */

var expect = require("chai").expect,
    regex  = {};

describe("Regular Expression Checks", () => {

  before(() => {
    require("./lib/compile")("./src/cmp/regex.js", regex);
  });

  describe("pattern(expected, actual)", () => {
    var pattern;

    before(() => {
      pattern = regex.exports.pattern;

    });

    it("can perform custom regex checks", () => {
      console.log('THIS IS PATTERN', pattern(/\d/, "1239876"));
      expect(pattern(/\d/, "1239876")).to.be.true;
      expect(pattern(/[0-9]{8}/, "1234")).to.be.false;
    });

    it("will return a partially applied fn if there's nothing to test against initially", () => {
      expect(pattern(/[0-9]{3,15}/)).to.be.a("function");
      expect(pattern(/[0-9]{3,15}/)("1239876")).to.be.true;
    });
  });
});
