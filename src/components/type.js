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


function type(expected, actual) {
  var formed = Object.prototype.toString.call(actual);
  return expected ? formed === expected : formed;
}

//TODO: Set every viable fn up with partial application
// for dat sweet filesize.
//var object = forge(type, types.object);


function object(value) {
  return type(types.object, value );
}

function array(value) {    // check native isArray first
  var native = Array.isArray;
  return native ? native(value) : type(types.array, value);
}

function string(value) {
    return type(types.string, value);
}

function char(value) {
  return string(value) && value.length === 1;
}

function _function(value) {
  return type(types._function, value);
}

function boolean(value) {
  return type(types.boolean, value);
}

function number(value) {
  return type(types.number, value);
}

function regexp(value) {
  return type(types.regexp, value);
}

function date(value) {
  return type(types.date, value);
}

function error(value) {
  return type(types.error, value);
}

function arguments(value) {
  return type(types._arguments, value);
}

function nan(value) {
  return number(value) && value.toString() === 'NaN';
}

function _null(value) {
  return type(types._null, value);
}

function _undefined(value) {
  return type(types._undefined, value);
}

function json(value) {
  return !!JSON.parse(value);
}

// Special use case for Promises,
// The A+ spec says anything with a .then()
// is acceptable as a promise.
function promise(value) {
  return !!value.then && _function(value.then);
}

module.exports = {
  types: types,
  type: type,
  object: object,
  array: array,
  string: string,
  char: char,
  _function: _function,
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
