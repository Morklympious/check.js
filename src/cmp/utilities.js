function not(value) {
  return !value;
}

function argen(args) {
  return Array.prototype.slice.call(args);
}

function forge(fn) {
  var args = argen(arguments).slice(1);

  return function() {
    return fn.apply(null, args.concat(argen(arguments)));
  };
}

module.exports = {
  not   : not,
  forge : forge,
  argen : argen
};
