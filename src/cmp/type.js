import util from "./utilities.js";

var forge = util.forge;

//OPTIMIZATION: Shorten the values here to remove [object ],
// and make the logic slice the toString 
var types = {
  "object"     : "Object",
  "array"      : "Array",
  "string"     : "String",
  "boolean"    : "Boolean",
  "number"     : "Number",
  "regex"      : "RegExp",
  "date"       : "Date",
  "error"      : "Error",
  "_undefined" : "Undefined",
  "_null"      : "Null",
  "_function"  : "Function",
  "_arguments" : "Arguments"
};


/* eslint-disable no-use-before-define */
var object      = forge(type, types.object),
    array       = Array.isArray || forge(type, types.array),
    string      = forge(type, types.string),
    _function   = forge(type, types._function),
    boolean     = forge(type, types.boolean),
    number      = forge(type, types.number),
    regexp      = forge(type, types.regexp),
    date        = forge(type, types.date),
    error       = forge(type, types.error),
    _arguments  = forge(type, types._arguments),
    _null       = forge(type, types._null),
    _undefined  = forge(type, types._undefined);

// type(types.object, {}) //=> true
// type(null, {}) //=> [object Object];
function type(expected, actual) {
  var formed = {}.toString.call(actual),
      short  = formed.substring(8, formed.length - 1);
  
  return expected ? short === expected : short;
}

function char(value) {
  return string(value) && value.length === 1;
}

function nan(value) {
  return number(value) && value.toString() === "NaN";
}

function json(value) {
  return Boolean(JSON.parse(value));
}

// Special use case for Promises,
// The A+ spec says anything with a .then()
// is acceptable as a promise.
function promise(value) {
  return Boolean(value.then) && _function(value.then);
}

export default {
  types,
  type,
  object,
  array,
  string,
  char,
  boolean,
  number,
  regexp,
  date,
  error,
  _function,
  _arguments,
  _null,
  _undefined,
  nan,
  json,
  promise
};
