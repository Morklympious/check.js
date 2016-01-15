// is.js Core

// helper function which reverses the sense of predicate result
function not(predicate) {
  return !predicate();
}

// all(isOdd, isEven, isWhatever)
function all(func) {
    var args = Array.prototype.slice.call(arguments);

    return args.every(function(predicate) {
      return predicate();
    });
}

// helper function which call predicate function per parameter and return true if any pass
function any(func) {
  var args = Array.prototype.slice.call(arguments);

  return args.some(function(predicate) {
    return predicate();
  });
}
