/* eslint-disable no-unused-expressions */

var expect = require("chai").expect,
    regex  = require("../src/components/regex.js");

describe("Regular Expression Checks", function() {
  describe("pattern(expected, actual)", function() {
    var pattern = regex.pattern;

    it("can perform custom regex checks", function() {
      expect(pattern(/[0-9]/, "1239876")).to.be.true;
      expect(pattern(/8[0-9]/, "1f2f3f4f5f6f7f8f9")).to.be.false;
    });
  });

  describe("username(str)", function() {
    var username = regex.username;

    it("is true for all text usernames");
    it("is true for mixed number and text usernames");
    it("is false if less than 3 chars or greater than 16");
  });

  describe("password(str)", function() {
    var password = regex.password;

    it("is true for all text passwords");
    it("is true for mixed passwords");
    it("is false if less than 6 or greater than 18 characters");
  });

  describe("hex(str)", function() {
    var hex = regex.hex;

    it("is true for 6 digits a-f 0-9");
    it("is true for 3 digits a-f 0-9");
  });

  describe("slug(str)", function() {
    var slug = regex.slug;

    it("is true for strings connected with hyphen (and only hyphen)");
  });

  describe("email(str)", function() {
    var email = regex.email;

    it("is true for strings with emails of any TLD");

  });

  describe("url(str)", function() {
    var url = regex.url;

    it("is true for any URL");
  });

  describe("ip(str)", function() {
    var ip = regex.ip;

    it("is true for Ipv4 address");
    it("is true for Ipv6 address");
  });
});
