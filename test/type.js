/* eslint-disable no-unused-expressions, no-new-wrappers, no-array-constructor, no-new-object */

var expect = require("chai").expect,
    Promise = require("bluebird"),
    types = {};

describe("Type Checking", () =>  {

  before(() => {
    require("./lib/compile")("./src/cmp/type.js", types);
  });

  describe("type(expected, actual)", () =>  {
    var type;

    before(() => {
      type = types.exports.type;
    });

    it("should be a function", () =>  {
      expect(type).to.be.a("function");
    });

    it("should return a proper type based on an internal map", () =>  {
      expect(type("Object", {})).to.be.true;
      expect(type("Array", [])).to.be.true;
      expect(type("Number", 1)).to.be.true;
      expect(type("Error", new Error())).to.be.true;
    });
  });

  describe("object (value)", () =>  {
    var object;

    before(() => {
      object = types.exports.object;
    });

    it("should be a function", () =>  {
      expect(object).to.be.a("function");
    });

    it("true for object({}) / object(new Object())", () =>  {
      expect(object({})).to.be.true;
      expect(object(new Object())).to.be.true;
    });
  });

  describe("array (value)", () =>  {
    var array;

    before(() => {
      array = types.exports.array;
    });

    it("should be a function", () =>  {
      expect(array).to.be.a("function");
    });

    it("true for array([]) / array(new Array())", () =>  {
      expect(array([])).to.be.true;
      expect(array(new Array())).to.be.true;
    });
  });

  describe("string (value)", () =>  {
    var string;

    before(() => {
      string = types.exports.string;
    });

    it("should be a function", () =>  {
      expect(string).to.be.a("function");
    });

    it('true for string("") / string(new String())', () =>  {
      expect(string("")).to.be.true;
      expect(string(new String())).to.be.true;
    });
  });

  describe("char (value)", () =>  {
    var char;

    before(() => {
      char = types.exports.char;
    });

    it("should be a function", () =>  {
      expect(char).to.be.a("function");
    });

    it("true for char('a') / char(new String('a'))", () =>  {
      expect(char("a")).to.be.true;
      expect(char(new String("a"))).to.be.true;
    });

    it("fails if length is greater than 1", () =>  {
      expect(char("abc")).to.be.false;
    });
  });

  describe("_function (value)", () =>  {
    var _function;

    before(() => {
      _function = types.exports._function;
    });

    it("should be a function", () =>  {
      expect(_function).to.be.a("function");
    });

    it("true for _function(() => { return this; }) / _function(new Function())", () =>  {
      expect(_function(() =>  {})).to.be.true;
      expect(_function(new Function())).to.be.true;
    });

    it("accepts a variable-named function", () =>  {
      var func = () =>  {};

      expect(_function(func)).to.be.true;
    });
  });

  describe("boolean (value)", () =>  {
    var boolean;

    before(() => {
      boolean = types.exports.boolean;
    });

    it("should be a function", () =>  {
      expect(boolean).to.be.a("function");
    });

    it("true for boolean(false) / boolean(new Boolean())", () =>  {
      expect(boolean(false)).to.be.true;
      expect(boolean(new Boolean())).to.be.true;
    });

    it("accepts double-bang non-boolean as type boolean", () =>  {
      expect(boolean(Boolean(new String()))).to.be.true;
    });
  });

  describe("number (value)", () =>  {
    var number;

    before(() => {
      number = types.exports.number;
    });

    it("should be a function", () =>  {
      expect(number).to.be.a("function");
    });

    it("true for number(1) / number(new Number())", () =>  {
      expect(number(1)).to.be.true;
      expect(number(new Number())).to.be.true;
    });
  });


  describe("regexp (value)", () =>  {
    var regexp;

    before(() => {
      regexp = types.exports.regexp;
    });

    it("should be a function", () =>  {
      expect(regexp).to.be.a("function");
    });

    it("true for regexp(/s/) / regexp(new RegExp())", () =>  {
        expect(regexp(/s/g)).to.be.ok;
        expect(regexp(new RegExp("/s/"))).to.be.ok;
    });
  });

  describe("date (value)", () =>  {
    var date;

    before(() => {
      date = types.exports.date;
    });

    it("should be a function", () =>  {
      expect(date).to.be.a("function");
    });

    it("true for date(new Date())", () =>  {
      expect(date(new Date())).to.be.true;
    });
  });

  describe("error (value)", () =>  {
    var error;

    before(() => {
      error = types.exports.error;
    });

    it("should be a function", () =>  {
      expect(error).to.be.a("function");
    });

    it("true for error(new Error())", () =>  {
      expect(error(new Error())).to.be.true;
    });
  });

  describe("arguments (value)", () =>  {
    var _arguments;

    before(() => {
      _arguments = types.exports._arguments;
    });

    it("should be a function", () =>  {
      expect(_arguments).to.be.a("function");
    });

    it("true for function arguments object", () =>  {
      expect(_arguments(arguments)).to.be.true;
    });
  });

  describe("nan (value)", () =>  {
    var nan;

    before(() => {
      nan = types.exports.nan;
    });

    it("should be a function", () =>  {
      expect(nan).to.be.a("function");
    });

    it("true for nan(NaN)", () =>  {
      expect(nan(NaN)).to.be.true;
    });

    it("false for valid numbers", () =>  {
      expect(nan(1)).to.be.false;
    });

    it("false for +Infinity/-Infinity", () =>  {
      expect(nan(Number(Infinity))).to.be.false;
      expect(nan(Number(-Infinity))).to.be.false;
    });
  });


    describe("_null (value)", () =>  {
      var _null;

      before(() => {
        _null = types.exports._null;
      });

      it("should be a function", () =>  {
        expect(_null).to.be.a("function");
      });

      it("true for _null(null)", () =>  {
        expect(_null(null)).to.be.true;
      });

      it("false for _null(NaN)", () =>  {
        expect(_null(NaN)).to.be.false;
      });

      it("false for truthy values", () =>  {
        expect(_null(1)).to.be.false;
        expect(_null("null")).to.be.false;
        expect(_null(true)).to.be.false;
      });
    });

    describe("_undefined (value)", () =>  {
      var _undefined;

      before(() => {
        _undefined = types.exports._undefined;
      });

      it("should be a function", () =>  {
        expect(_undefined).to.be.a("function");
      });

      it("false for _undefined(null)", () =>  {
        expect(_undefined(null)).to.be.false;
      });

      it("true for _undefined(undefined)", () =>  {
        expect(_undefined(undefined)).to.be.true;
      });

      it("false for truthy values", () =>  {
        expect(_undefined(1)).to.be.false;
        expect(_undefined("null")).to.be.false;
        expect(_undefined(true)).to.be.false;
      });
    });

    describe("json (value)", () =>  {
      var json;

      before(() => {
        json = types.exports.json;
      });

      it("should be a function", () =>  {
        expect(json).to.be.a("function");
      });

      it("true for valid JSON", () =>  {
        var js = '{"one": "two", "three": ["four", "five"]}';

        expect(json(js)).to.be.true;
      });
    });

    describe("promise (value)", () =>  {
        var promise,
            p = new Promise(() => {}, () => {});

        before(() => {
          promise = types.exports.promise;
        });

        it("should be a function", () =>  {
          expect(promise).to.be.a("function");
        });

        it("true for promise(Promise)", () =>  {
          expect(promise(p)).to.be.true;
        });
    });
});
