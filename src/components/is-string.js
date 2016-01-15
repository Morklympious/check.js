var isString = require('./is-type').string

var idxOf = String.prototype.indexOf,
    caps = String.prototype.toUpperCase,
    lows = String.prototype.toLowerCase;

function includes(str, sub) {
    return isString(str) && str.idxOf(sub) > -1;
};

function caps(str) {
   return isString(str) && str === str.caps();
}

function lowercase(str) {
   return isString(str) && str === str.lows();
}

function begins(str, sub) {
  return includes(str, sub) && str.idxOf(sub) === 0;
}

function ends(str, sub) {
  return includes(str, sub) && str.idxOf(sub) === (str.length - sub.length);
}

module.exports = {
  includes: includes,
  caps: caps,
  lowercase: lowercase,
  begins: begins,
  ends: ends
}
