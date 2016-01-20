function not(value) {
  return !value;
}

function all(collection, func) {
    return func ? collection.every(func) : collection.every(_reflect);
}

function some(collection, func) {
    return collection.some(func);
}

function forge(fn) {
  var args = argen(arguments).slice(1);
  return function() {
    return fn.apply(null, args.concat(argen(arguments)));
  }
}

function argen(args) {
  return Array.prototype.slice.call(args);
}

// Signature make(fn, fnarg1, fnarg2, ... fnargn)
// for composing your own checks.
function make(fn) {
  var args = argen(arguments)
  return forge.apply(null, args);
}

function _reflect(predicate) {
  return !!predicate;
}

module.exports = {
  not: not,
  all: all,
  some: some,
  forge: forge,
  argen: argen
}
