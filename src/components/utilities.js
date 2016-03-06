function not(value) {
  return !value;
}

function all(collection, fn) {
    return collection.every(fn || _reflect);
}

function some(collection, fn) {
    return collection.some(fn || _reflect);
}

function forge(fn) {
  var args = argen(arguments).slice(1);
  return function() {
    return fn.apply(null, args.concat(argen(arguments)));
  }
}

function argen(args) {
  return [].slice.call(args);
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
