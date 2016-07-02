import util from "./utilities.js";

var forge = util.forge;

var types = {
  object     : "Object",
  array      : "Array",
  string     : "String",
  boolean    : "Boolean",
  number     : "Number",
  regex      : "RegExp",
  date       : "Date",
  error      : "Error",
  _function  : "Function",
  _undefined : "Undefined",
  _null      : "Null",
  _arguments : "Arguments"
};


/* eslint-disable no-use-before-define */
var object      = forge(type, types.object),
    array       = Array.isArray || forge(type, types.array),
    string      = forge(type, types.string),
    boolean     = forge(type, types.boolean),
    number      = forge(type, types.number),
    regexp      = forge(type, types.regexp),
    date        = forge(type, types.date),
    error       = forge(type, types.error),
    _function   = forge(type, types._function),
    _arguments  = forge(type, types._arguments),
    _null       = forge(type, types._null),
    _undefined  = forge(type, types._undefined);

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
