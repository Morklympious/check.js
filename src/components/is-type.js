var u = require('./is-utilities.js'),
    type = u.type,
    types = u.types;

function object(value) {
  return type(value) === types['object'];
}

function array(value) {    // check native isArray first
  return Array.isArray ? Array.isArray(value) : type(value) === types['array'];
}

function string(value) {
    return type(value) === types['string'];
}

function char(value) {
  return string(value) && value.length === 1;
}

// is a given value function?
function fn(value) {    // fallback check is for IE
  return type(value) === types['function'];
}

// is a given value Boolean?
function boolean(value) {
  return type(value) === types['boolean'];
}

//
function number(value) {
  return type(value) === types['number'];
}

// is a given value RegExp?
function regexp(value) {
  return type(value) === types['regexp'];
}

// is a given value Date Object?
function date(value) {
  return type(value) === types['date'];
}

// is a given value Error object?
function error(value) {
  return type(value) === types['error'];
}

// is a given value Arguments?
function arguments(value) {    // fallback check is for IE
  return object(value) && type(value) === types['arguments'];
}

function nan(value) {
  return number(value) && value.toString() === 'NaN';
}

function _null(value) {
  return type(value) === types['null'];
}

function _undefined(value) {
  return type(value) === types['undefined']
}

function json(value) {
  // Not currently Implemented
}


module.exports = {
  object: object,
  array: array,
  string: string,
  fn: fn,
  boolean: boolean,
  number: number,
  regexp: regexp,
  date: date,
  error: error,
  arguments: arguments,
  nan: nan,
  'null': _null
  'undefined': _undefined
  json: json,
  char: char
};
