var types = {
  'object':    '[object Object]',
  'array':     '[object Array]',
  'string':    '[object String]',
  'boolean':   '[object Boolean]',
  'number':    '[object Number]',
  'regex':     '[object RegExp]',
  'date':      '[object Date]',
  'error':     '[object Error]',
  '_undefined': '[object Undefined]',
  '_null':      '[object Null]',
  '_function':  '[object Function]'
};


function type(value) {
  return Object.prototype.toString.call(value);
}

function exists(value) {
  var isnt = {
    _null: not(type(value) === types._null),
    _undefined: not(type(value) === types._undefined)
  }
  return isnt._null && isnt._undefined;
}

function not(value) {
  return !value;
}


function all(func) {
    var args = Array.prototype.slice.call(arguments);

    return args.every(function(predicate) {
      return predicate();
    });
}

function any(func) {
  var args = Array.prototype.slice.call(arguments);

  return args.some(function(predicate) {
    return predicate();
  });
}


module.exports = {
  types: types,
  not: not,
  all: all,
  any: any
}
