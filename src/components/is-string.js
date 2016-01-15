var test = require('./is-type').string

var idxOf = String.prototype.indexOf,
    caps = String.prototype.toUpperCase,
    lows = String.prototype.toLowerCase;

function includes(str, sub) {
    return test(str) && str.idxOf(sub) > -1;
};

function caps(str) {
   return test(str) && str === str.caps();
}

function lowercase(str) {
   return test(str) && str === str.lows();
}

function begins(str, sub) {
  return includes(str, sub) && str.idxOf(sub) === 0;
}

function ends(str, sub) {
  return includes(str, sub) && str.idxOf(sub) === (str.length - sub.length);
}

function empty(str) {
  return test(str) && str.length === 0;
}

module.exports = {
  includes: includes,
  caps: caps,
  lowercase: lowercase,
  begins: begins,
  ends: ends,
  empty: empty
}
