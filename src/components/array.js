var test = require('./type.js').array;

function contains(collection, value) {
  return test(collection) && collection.indexOf(value) > -1;
}

function empty(collection) {
  return test(collection) && collection.length === 0;
}

module.exports = {
  contains: contains,
  empty: empty
}
