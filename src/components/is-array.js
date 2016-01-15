var test = require('./is-type.js').array;

var idx = Array.prototype.indexOf;



// is a given item in an array?
is.inArray = function(val, collection){
  return idx.call(collection, val)
};

// is a given array sorted?
is.sorted = function(arr) {
    // Every?
};
