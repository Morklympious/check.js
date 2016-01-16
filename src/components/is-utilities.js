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
  not: not,
  all: all,
  any: any
}
