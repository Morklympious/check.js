/* eslint-disable no-unused-expressions, no-new-wrappers, no-array-constructor, no-new-object */

var expect = require("chai").expect;
var types = require("../src/components/type.js");

describe("Type Checking", function() {
  describe("type(expected, actual)", function() {
    var type = types.type;

    it("should be a function", function() {
      expect(type).to.be.a("function");
    });

    it("should return a proper type based on an internal map", function() {
      expect(type("[object Object]", {})).to.be.true;
      expect(type("[object Array]", [])).to.be.true;
      expect(type("[object Number]", 1)).to.be.true;
      expect(type("[object Error]", new Error())).to.be.true;
    });
  });

  describe("object (value)", function() {
    var object = types.object;

    it("should be a function", function() {
      expect(object).to.be.a("function");
    });

    it("true for object({}) / object(new Object())", function() {
      expect(object({})).to.be.true;
      expect(object(new Object())).to.be.true;
    });
  });

  describe("array (value)", function() {
    var array = types.array;

    it("should be a function", function() {
      expect(array).to.be.a("function");
    });

    it("true for array([]) / array(new Array())", function() {
      expect(array([])).to.be.true;
      expect(array(new Array())).to.be.true;
    });
  });

  describe("string (value)", function() {
    var string = types.string;

    it("should be a function", function() {
      expect(string).to.be.a("function");
    });

    it('true for string("") / string(new String())', function() {
      expect(string("")).to.be.true;
      expect(string(new String())).to.be.true;
    });
  });

  describe("char (value)", function() {
    var char = types.char;

    it("should be a function", function() {
      expect(char).to.be.a("function");
    });

    it('true for char("a") / char(new String("a"))', function() {
      expect(char("a")).to.be.true;
      expect(char(new String("a"))).to.be.true;
    });

    it("fails if length is greater than 1", function() {
      expect(char("abc")).to.be.false;
    });
  });

  describe("_function (value)", function() {
    var _function = types._function;

    it("should be a function", function() {
      expect(_function).to.be.a("function");
    });

    it("true for _function(function(){ return this; }) / _function(new Function())", function() {
      expect(_function(function() {})).to.be.true;
      expect(_function(new Function())).to.be.true;
    });

    it("accepts a variable-named function", function() {
      var func = function() {};

      expect(_function(func)).to.be.true;
    });
  });

  describe("boolean (value)", function() {
    var boolean = types.boolean;

    it("should be a function", function() {
      expect(boolean).to.be.a("function");
    });

    it("true for boolean(false) / boolean(new Boolean())", function() {
      expect(boolean(false)).to.be.true;
      expect(boolean(new Boolean())).to.be.true;
    });

    it("accepts double-bang non-boolean as type boolean", function() {
      expect(boolean(Boolean(new String()))).to.be.true;
    });
  });

  describe("number (value)", function() {
    var number = types.number;

    it("should be a function", function() {
      expect(number).to.be.a("function");
    });

    it("true for number(1) / number(new Number())", function() {
      expect(number(1)).to.be.true;
      expect(number(new Number())).to.be.true;
    });
  });


  describe("regexp (value)", function() {
      var regexp = types.regexp;

      it("should be a function", function() {
        expect(regexp).to.be.a("function");
      });

      it("true for regexp(/s/) / regexp(new RegExp())", function() {
         expect(regexp(/s/g)).to.be.ok;
         expect(regexp(new RegExp("/s/"))).to.be.ok;
      });
  });

  describe("date (value)", function() {
      var date = types.date;

      it("should be a function", function() {
        expect(date).to.be.a("function");
      });

      it("true for date(new Date())", function() {
        expect(date(new Date())).to.be.true;
      });
  });

  describe("error (value)", function() {
      var error = types.error;

      it("should be a function", function() {
        expect(error).to.be.a("function");
      });

      it("true for error(new Error())", function() {
        expect(error(new Error())).to.be.true;
      });
  });

  describe("arguments (value)", function() {
      var _arguments = types.arguments;

      it("should be a function", function() {
        expect(_arguments).to.be.a("function");
      });

      it("true for function arguments object", function() {
        expect(_arguments(arguments)).to.be.true;
      });
  });

  describe("nan (value)", function() {
      var nan = types.nan;

      it("should be a function", function() {
        expect(nan).to.be.a("function");
      });

      it("true for nan(NaN)", function() {
        expect(nan(NaN)).to.be.true;
      });

      it("false for valid numbers", function() {
        expect(nan(1)).to.be.false;
      });

      it("false for +Infinity/-Infinity", function() {
        expect(nan(Number(Infinity))).to.be.false;
        expect(nan(Number(-Infinity))).to.be.false;
      });
  });


    describe("_null (value)", function() {
        var _null = types._null;

        it("should be a function", function() {
          expect(_null).to.be.a("function");
        });

        it("true for _null(null)", function() {
          expect(_null(null)).to.be.true;
        });

        it("false for _null(NaN)", function() {
          expect(_null(NaN)).to.be.false;
        });

        it("false for truthy values", function() {
          expect(_null(1)).to.be.false;
          expect(_null("null")).to.be.false;
          expect(_null(true)).to.be.false;
        });
    });

    describe("_undefined (value)", function() {
        var _undefined = types._undefined;

        it("should be a function", function() {
          expect(_undefined).to.be.a("function");
        });

        it("false for _undefined(null)", function() {
          expect(_undefined(null)).to.be.false;
        });

        it("true for _undefined(undefined)", function() {
          expect(_undefined(undefined)).to.be.true;
        });

        it("false for truthy values", function() {
          expect(_undefined(1)).to.be.false;
          expect(_undefined("null")).to.be.false;
          expect(_undefined(true)).to.be.false;
        });
    });

    describe("json (value)", function() {
        var json = types.json;

        it("should be a function", function() {
          expect(json).to.be.a("function");
        });

        it("true for valid JSON", function() {
          var js = '{"one": "two", "three": ["four", "five"]}';

          expect(json(js)).to.be.true;
        });
    });

    describe("json (value)", function() {
        var json = types.json;

        it("should be a function", function() {
          expect(json).to.be.a("function");
        });

        it("true for valid JSON", function() {
          var js = '{"one": "two", "three": ["four", "five"]}';

          expect(json(js)).to.be.true;
        });
    });


    describe("promise (value)", function() {
        var promise = types.promise;

        it("should be a function", function() {
          expect(promise).to.be.a("function");
        });

        it("should have a .then() property", function() {
          // expect(p.then).to.be.ok;
        });

        it("true for promise(Promise)", function() {
          // expect(promise(p)).to.be.true;
        });
    });
});
