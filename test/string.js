/* eslint-disable no-unused-expressions */

var expect = require("chai").expect,
    string  = require("../src/components/string.js");

describe("String Checking", function() {
  describe("includes(str, sub)", function() {
    var includes = string.includes;

    it("should be true if sub exists in str", function() {
      expect(includes("You only live once", " once")).to.be.true;
      expect(includes("The legendary sax man", "end")).to.be.true;
    });

    it("should be false id sub doesn't exist in str", function() {
      expect(includes("You only live once", "twice")).to.be.false;
      expect(includes("The legendary sax man", "Sergio")).to.be.false;
    });

    it("should be false for bad types", function() {
      expect(includes("You only live once", [])).to.be.false;
      expect(includes("You only live once", {})).to.be.false;
    });
  });

  describe("caps(str)", function() {
    var caps = string.caps;

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
    var lowercase = string.lowercase;

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
    var begins = string.begins;

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
    var ends = string.ends;

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
    var empty = string.empty;

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
    var contains = string.contains;

    it("should be true for sub inside of str", function() {
      expect(contains("butterfly", "butter")).to.be.true;
      expect(contains("fish", "is")).to.be.true;
      expect(contains("Last week, I saw a film", "film")).to.be.true;
    });
  });
});
