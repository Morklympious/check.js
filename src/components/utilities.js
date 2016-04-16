function not(value) {
  return !value;
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

module.exports = {
  not: not,
  forge: forge,
  argen: argen
}
