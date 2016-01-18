var test = require('./is-type.js').string

function includes(str, sub) {
    return test(str) && str.indexOf(sub) > -1;
};

function caps(str) {
   return test(str) && str === str.toUpperCase();
}

function lowercase(str) {
   return test(str) && str === str.toLowerCase();
}

function begins(str, sub) {
  return includes(str, sub) && str.indexOf(sub) === 0;
}

function ends(str, sub) {
  return includes(str, sub) && str.indexOf(sub) === (str.length - sub.length);
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
