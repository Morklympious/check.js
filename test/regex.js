/* eslint-disable no-unused-expressions */

var expect = require("chai").expect,
    regex  = {}

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
      expect(pattern(/[0-9]/, "1239876")).to.be.true;
      expect(pattern(/8[0-9]/, "1234")).to.be.false;
    });

    it("will return a partially applied fn if there's nothing to test against initially", () => {
      expect(pattern(/[0-9]/)).to.be.a("function");
      expect(pattern(/[0-9]/)("1239876")).to.be.true;
    })
  });

  describe("username(str)", () => {
    var username;

    before(() => {
      username = regex.exports.username;
    });

    it("is true for all text usernames", () => {
      expect(username("xEdgelordx")).to.be.true;
    });
    it("is true for mixed number and text usernames", () => {
      expect(username("xEdgel0rd420x")).to.be.true;
    });
    it("is false if less than 3 chars or greater than 16", () => {
      expect(username("hi")).to.be.false;
      expect(username("xXxEdgel0rd420xXx")).to.be.false;
    });
  });

  describe("password(str)", () => {
    var password;

    before(() => {
      password = regex.exports.password;
    });

    it("is true for all text passwords", () =>{
      expect(password("secretPassword")).to.be.true;
    });
    it("is true for mixed text/number passwords", () =>{
      expect(password("s3cr3tp455w0rd")).to.be.true;
    });
    it("is false if less than 6 or greater than 18 characters", () =>{
      expect(password("scrt")).to.be.false;
      expect(password("superduperextramegasecret")).to.be.false;
    });
    it("is false for '/', '*', '.' ", () => {
      expect(password(".abababab")).to.be.false;
      expect(password("abab/abab")).to.be.false;
      expect(password("abab*abab")).to.be.false;
    });
  });

  describe("hex(str)", () => {
    var hex;

    before(() => {
      hex = regex.exports.hex;
    });

    it("is true for 6 digits a-f 0-9", () => {
      expect(hex("#abcdef")).to.be.true;
    });
    it("is true for 3 digits a-f 0-9", () => {
      expect(hex("#eee")).to.be.true;
    });
    it("is false for non hex digits", () => {
      expect(hex("#15gzzz")).to.be.false;
      expect(hex("15gzzza")).to.be.false;
    });
  });

  describe("slug(str)", () => {
    var slug;

    before(() => {
      slug = regex.exports.slug;
    });

    it("is true for strings connected with hyphen (and only hyphen)", () => {
      expect(slug("this-is-a-slug")).to.be.true;
      expect(slug("this is space separated")).to.be.false;
      expect(slug("this-is-a-number-slug-5")).to.be.true;
    });
  });

  describe("email(str)", () => {
    var email;

    before(() => {
      email = regex.exports.email;
    });

    it("is true for strings with emails of any TLD", () => {
      expect(email("example@example.com")).to.be.true;
      expect(email("fake@fakeness.com")).to.be.true;
      expect(email("morklympious@gmail.com")).to.be.true;
    });
  });

  describe("url(str)", () => {
    var url;

    before(() => {
      url = regex.exports.url;
    });

    it("is true for any URL", () => {
      expect(url("https://github.com")).to.be.true;
      expect(url("www.morklympious.github.io")).to.be.true;
      expect(url("https://twitter.com/bradleystafford")).to.be.true;
    });
  });
});
