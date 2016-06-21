var test = require("./type.js").string;

function caps(str) {
   return test(str) && str === str.toUpperCase();
}

function lowercase(str) {
   return test(str) && str === str.toLowerCase();
}

function begins(str, sub) {
  return contains(str, sub) && str.indexOf(sub) === 0;
}

function ends(str, sub) {
  return contains(str, sub) && str.indexOf(sub) === (str.length - sub.length);
}

function empty(str) {
  return test(str) && str.length === 0;
}

function contains(str, sub) {
  return test(str) && test(sub) && str.indexOf(sub) > -1;
}

module.exports = {
  caps      : caps,
  lowercase : lowercase,
  begins    : begins,
  ends      : ends,
  empty     : empty,
  contains  : contains
};
