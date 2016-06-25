var test = require("./type.js").object;

var keys = Object.keys;

function size(obj, count) {
  return test(obj) && keys(obj).length === count;
}

function empty(obj) {
  return test(obj) && keys(obj).length === 0;
}

function contains(obj, prop) {
  return test(obj) && Boolean(obj[prop]);
}

module.exports = {
  size     : size,
  empty    : empty,
  contains : contains
};
