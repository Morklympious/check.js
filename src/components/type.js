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

var object      = forge(type, types.object),
    array       = Array.isArray || forge(type, types.array),
    string      = forge(type, types.string),
    _function   = forge(type, types._function),
    boolean     = forge(type, types.boolean),
    number      = forge(type, types.number),
    regexp      = forge(type, types.regexp),
    date        = forge(type, types.date),
    error       = forge(type, types.error),
    arguments   = forge(type, types.arguments),
    _null       = forge(type, types._null),
    _undefined  = forge(type, types._undefined);

function char(value) {
  return string(value) && value.length === 1;
}


function nan(value) {
  return number(value) && value.toString() === 'NaN';
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
