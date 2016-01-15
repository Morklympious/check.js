var types = {
  'object':    '[object Object]',
  'array':     '[object Array]',
  'string':    '[object String]',
  'boolean':   '[object Boolean]',
  'number':    '[object Number]',
  'regex':     '[object RegExp]',
  'date':      '[object Date]',
  'error':     '[object Error]',
  'undefined': '[object Undefined]',
  'null':      '[object Null]'
}


function type(value) {
  return Object.prototype.toString.call(value);
}

function not(predicate) {
  return !predicate();
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
