function not(value) {
  return !value;
}

function all(collection, func) {
    return collection.every(func);
}

function some(collection, func) {
    return collection.some(func);
}

// Iterating over with a for loop is much more performant for args.
function argen() {
  var params = [];
  for(var i = 0, len = arguments.length; i < len; i++) {
    params.push(arguments[i]);
  }
  return params;
}

module.exports = {
  not: not,
  all: all,
  some: some,
  argen: argen
}
