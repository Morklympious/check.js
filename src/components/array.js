var test = require('./type.js').array

function contains(collection, value) {
  return test(collection) && collection.indexOf(value) > -1;
}

function empty(collection) {
  return test(collection) && collection.length === 0;
}

function sorted(collection, fn) {
  return test(collection) && collection.reduce(fn || function(prev, curr){
    return curr >= prev;
  });
}

module.exports = {
  contains: contains,
  empty: empty,
  sorted: sorted
}
