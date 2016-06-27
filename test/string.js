/* eslint-disable no-unused-expressions */

var expect = require("chai").expect,
    string  = {};

describe("String Checking", function() {
  
  before(() => {
    require("./lib/compile")("./src/cmp/string.js", string);
  });


  describe("caps(str)", function() {
    var caps;

    before(() => {
      caps = string.exports.caps;
    });

    it("should be true for all caps strings", function() {
      expect(caps("YOLO")).to.be.true;
      expect(caps("I'M GONNA LIVE FOREVER")).to.be.true;
    });

    it("should be false for mixed or lowercase strings", function() {
      expect(caps("YOLo")).to.be.false;
      expect(caps("I'M GoNNA LIVE FOReVeR")).to.be.false;
    });
  });

  describe("lowercase(str)", function() {
    var lowercase;

    before(() => {
      lowercase = string.exports.lowercase;
    });

    it("should be true for all lowercase strings", function() {
      expect(lowercase("yolo")).to.be.true;
      expect(lowercase("i'm gonna live forever")).to.be.true;
    });

    it("should be false for mixed or caps strings", function() {
      expect(lowercase("YOLo")).to.be.false;
      expect(lowercase("I'M GoNNA LIVE FOReVeR")).to.be.false;
      expect(lowercase("AYYYY")).to.be.false;
    });
  });

  describe("begins(str, sub)", function() {
    var begins;

    before(() => {
      begins = string.exports.begins;
    });

    it("should be true for sub starting str", function() {
      expect(begins("yolo", "yo")).to.be.true;
      expect(begins("i'm gonna live forever", "i'm gonna live")).to.be.true;
    });

    it("should be false for any string but sub starting str", function() {
      expect(begins("yolo", "lo")).to.be.false;
      expect(begins("i'm gonna live forever", "forever")).to.be.false;
    });
  });

  describe("ends(str, sub)", function() {
    var ends;

    before(() => {
      ends = string.exports.ends;
    });

    it("should be true for sub ending string", function() {
      expect(ends("yolo", "lo")).to.be.true;
      expect(ends("i'm gonna live forever", "live forever")).to.be.true;
    });

    it("should be false for any string but sub ending str", function() {
      expect(ends("yolo", "yo")).to.be.false;
      expect(ends("i'm gonna live forever", "live forev")).to.be.false;
    });
  });

  describe("empty(str)", function() {
    var empty;

    before(() => {
      empty = string.exports.empty;
    });

    it("should be true for empty string", function() {
      expect(empty("")).to.be.true;
    });

    it("should be false for any other string or type", function() {
      expect(empty("Incredible thoughts")).to.be.false;
      expect(empty({})).to.be.false;
      expect(empty(NaN)).to.be.false;
      expect(empty("undefined")).to.be.false;
    });
  });

  describe("contains(str, sub)", function() {
    var contains;

    before(() => {
      contains = string.exports.contains;
    });

    it("should be true for sub inside of str", function() {
      expect(contains("butterfly", "butter")).to.be.true;
      expect(contains("fish", "is")).to.be.true;
      expect(contains("Last week, I saw a film", "film")).to.be.true;
    });
  });
});
