var util = require('./utilities.js'),
    forge = util.forge;

var types = {
  'object':     '[object Object]',
  'array':      '[object Array]',
  'string':     '[object String]',
  'boolean':    '[object Boolean]',
  'number':     '[object Number]',
  'regex':      '[object RegExp]',
  'date':       '[object Date]',
  'error':      '[object Error]',
  '_undefined': '[object Undefined]',
  '_null':      '[object Null]',
  '_function':  '[object Function]',
  '_arguments': '[object Arguments]'
};

// Type checking function
// TODO: Make 'value' param array, run 'every' to support
function type(expect, value) {
  var formed = Object.prototype.toString.call(value);
  return expect ? formed === expect : formed;
}

//TODO: Set every viable fn up with partial application
// for dat sweet filesize.
//var object = forge(type, types.object);


function object(value) {
  return type(value, types.object);
}

function array(value) {    // check native isArray first
  var native = Array.isArray;
  return native ? native(value) : type(value, types.array);
}

function string(value) {
    return type(value, types.string);
}

function char(value) {
  return string(value) && value.length === 1;
}

// is a given value function?
function fn(value) {    // fallback check is for IE
  return type(value, types._function);
}

// is a given value Boolean?
function boolean(value) {
  return type(value, types.boolean);
}

//
function number(value) {
  return type(value, types.number);
}

// is a given value RegExp?
function regexp(value) {
  return type(value, types.regexp);
}

// is a given value Date Object?
function date(value) {
  return type(value, types.date);
}

// is a given value Error object?
function error(value) {
  return type(value, types.error);
}

// is a given value Arguments?
function arguments(value) {
  return object(value) && type(value, types._arguments);
}

function nan(value) {
  return number(value) && value.toString() === 'NaN';
}

function _null(value) {
  return type(value, types._null);
}

function _undefined(value) {
  return type(value, types._undefined);
}

function json(value) {
  // Not currently Implemented
}

// Special use case for Promises,
// The A+ spec says anything with a .then()
// is acceptable as a promise.
function promise(value) {
  return !!value.then && _function(value.then, types._function);
}

module.exports = {
  types: types,
  type: type,
  object: object,
  array: array,
  string: string,
  char: char,
  fn: fn,
  boolean: boolean,
  number: number,
  regexp: regexp,
  date: date,
  error: error,
  arguments: arguments,
  nan: nan,
  _null: _null,
  _undefined: _undefined,
  json: json,
  promise: promise
};
