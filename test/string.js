/* eslint-disable no-unused-expressions */

var expect = require("chai").expect,
    string  = {};

describe("String Checking", () => {

  before(() => {
    require("./lib/compile")("./src/cmp/string.js", string);
  });


  describe("caps(str)", () => {
    var caps;

    before(() => {
      caps = string.exports.caps;
    });

    it("should be true for all caps strings", () => {
      expect(caps("YOLO")).to.be.true;
      expect(caps("I'M GONNA LIVE FOREVER")).to.be.true;
    });

    it("should be true for mixed number all caps strings", () => {
      expect(caps("Y0L0")).to.be.true;
    })

    it("should be false for mixed or lowercase strings", () => {
      expect(caps("YOLo")).to.be.false;
      expect(caps("I'M GoNNA LIVE FOReVeR")).to.be.false;
    });
  });

  describe("lowercase(str)", () => {
    var lowercase;

    before(() => {
      lowercase = string.exports.lowercase;
    });

    it("should be true for all lowercase strings", () => {
      expect(lowercase("yolo")).to.be.true;
      expect(lowercase("i'm gonna live forever")).to.be.true;
    });

    it("should be false for mixed or caps strings", () => {
      expect(lowercase("YOLo")).to.be.false;
      expect(lowercase("I'M GoNNA LIVE FOReVeR")).to.be.false;
      expect(lowercase("AYYYY")).to.be.false;
    });
  });

  describe("begins(str, sub)", () => {
    var begins;

    before(() => {
      begins = string.exports.begins;
    });

    it("should be true for sub starting str", () => {
      expect(begins("yolo", "yo")).to.be.true;
      expect(begins("i'm gonna live forever", "i'm gonna live")).to.be.true;
    });

    it("should be false for any string but sub starting str", () => {
      expect(begins("yolo", "lo")).to.be.false;
      expect(begins("i'm gonna live forever", "forever")).to.be.false;
    });
  });

  describe("ends(str, sub)", () => {
    var ends;

    before(() => {
      ends = string.exports.ends;
    });

    it("should be true for sub ending string", () => {
      expect(ends("yolo", "lo")).to.be.true;
      expect(ends("i'm gonna live forever", "live forever")).to.be.true;
    });

    it("should be false for any string but sub ending str", () => {
      expect(ends("yolo", "yo")).to.be.false;
      expect(ends("i'm gonna live forever", "live forev")).to.be.false;
    });
  });

  describe("empty(str)", () => {
    var empty;

    before(() => {
      empty = string.exports.empty;
    });

    it("should be true for empty string", () => {
      expect(empty("")).to.be.true;
    });

    it("should be false for any other string or type", () => {
      expect(empty("Incredible thoughts")).to.be.false;
      expect(empty({})).to.be.false;
      expect(empty(NaN)).to.be.false;
      expect(empty("undefined")).to.be.false;
    });
  });

  describe("contains(str, sub)", () => {
    var contains;

    before(() => {
      contains = string.exports.contains;
    });

    it("should be true for sub inside of str", () => {
      expect(contains("butterfly", "butter")).to.be.true;
      expect(contains("fish", "is")).to.be.true;
      expect(contains("Last week, I saw a film", "film")).to.be.true;
    });
  });
});
