/* eslint-disable no-unused-expressions */

var expect = require("chai").expect,
    regex  = require("../src/cmp/regex.js");

describe("Regular Expression Checks", function() {
  describe("pattern(expected, actual)", function() {
    var pattern = regex.pattern;

    it("can perform custom regex checks", function() {
      expect(pattern(/[0-9]/, "1239876")).to.be.true;
      expect(pattern(/8[0-9]/, "1234")).to.be.false;
    });
  });

  describe("username(str)", function() {
    var username = regex.username;

    it("is true for all text usernames", function() {
      expect(username("xEdgelordx")).to.be.true;
    });
    it("is true for mixed number and text usernames", function() {
      expect(username("xEdgel0rd420x")).to.be.true;
    });
    it("is false if less than 3 chars or greater than 16", function() {
      expect(username("hi")).to.be.false;
      expect(username("xXxEdgel0rd420xXx")).to.be.false;
    });
  });

  describe("password(str)", function() {
    var password = regex.password;

    it("is true for all text passwords", function(){
      expect(password("secretPassword")).to.be.true;
    });
    it("is true for mixed text/number passwords", function(){
      expect(password("s3cr3tp455w0rd")).to.be.true;
    });
    it("is false if less than 6 or greater than 18 characters", function(){
      expect(password("scrt")).to.be.false;
      expect(password("superduperextramegasecret")).to.be.false;
    });
    it("is false for '/', '*', '.' ", function() {
      expect(password(".abababab")).to.be.false;
      expect(password("abab/abab")).to.be.false;
      expect(password("abab*abab")).to.be.false;
    });
  });

  describe("hex(str)", function() {
    var hex = regex.hex;

    it("is true for 6 digits a-f 0-9", function() {
      expect(hex("#abcdef")).to.be.true;
    });
    it("is true for 3 digits a-f 0-9", function() {
      expect(hex("#eee")).to.be.true;
    });
    it("is false for non hex digits", function() {
      expect(hex("#15gzzz")).to.be.false;
      expect(hex("15gzzza")).to.be.false;
    });
  });

  describe("slug(str)", function() {
    var slug = regex.slug;

    it("is true for strings connected with hyphen (and only hyphen)", function() {
      expect(slug("this-is-a-slug")).to.be.true;
      expect(slug("this is space separated")).to.be.false;
      expect(slug("this-is-a-number-slug-5")).to.be.true;
    });
  });

  describe("email(str)", function() {
    var email = regex.email;

    it("is true for strings with emails of any TLD", function() {
      expect(email("example@example.com")).to.be.true;
      expect(email("fake@fakeness.com")).to.be.true;
      expect(email("morklympious@gmail.com")).to.be.true;
    });
  });

  describe("url(str)", function() {
    var url = regex.url;

    it("is true for any URL", function() {
      expect(url("https://github.com")).to.be.true;
      expect(url("www.morklympious.github.io")).to.be.true;
      expect(url("https://twitter.com/bradleystafford")).to.be.true;
    });
  });
});
