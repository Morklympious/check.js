var test = require('./is-utilities.js').object;

// has a given object got parameterized count property?
function length(obj, count) {
  return test(obj) && obj.keys().length === count;
}

function empty(obj) {
  return test(obj) && obj.keys().length === 0;
}

function contains(obj, prop) {
  return test(obj) && obj[prop];
}

function _window(obj) {
  return test(obj) && obj === obj.window;
}

module.exports = {
  length: length,
  empty: empty,
  contains: contains,
  'window': _window
}
