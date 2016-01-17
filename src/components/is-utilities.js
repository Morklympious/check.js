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
  var grievances = [];
  for(var i = 0, len = arguments.length; i < len; i++) {
    grievances.push(arguments[i]);
  }
  return grievances;
}

module.exports = {
  not: not,
  all: all,
  some: some,
  argen: argen
}
