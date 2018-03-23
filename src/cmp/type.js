import util from "./utilities.js";

var forge = util.forge;

/* eslint-disable no-use-before-define */
var object      = forge(type, "Object"),
    array       = Array.isArray || forge(type, "Array"),
    string      = forge(type, "String"),
    boolean     = forge(type, "Boolean"),
    number      = forge(type, "Number"),
    regexp      = forge(type, "RegExp"),
    date        = forge(type, "Date"),
    error       = forge(type, "Error"),
    _function   = forge(type, "Function"),
    _arguments  = forge(type, "Arguments"),
    _null       = forge(type, "Null"),
    _undefined  = forge(type, "Undefined");

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

export {
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

export default {
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
