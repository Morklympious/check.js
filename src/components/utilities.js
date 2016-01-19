function not(value) {
  return !value;
}

function all(collection, func) {
    return collection.every(func);
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

// Iterating over with a for loop is much more performant for args
// apparently V8 can't optimize [].prototype.slice.call();
function argen(args) {
  return Array.prototype.slice.call(args);
}

module.exports = {
  not: not,
  all: all,
  some: some,
  forge: forge,
  argen: argen
}
