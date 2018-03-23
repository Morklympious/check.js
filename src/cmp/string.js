import type from "./type.js";
const test = type.string;

function contains(str, sub) {
  return test(str) && test(sub) && str.indexOf(sub) > -1;
}

function caps(str) {
   return test(str) && str === str.toUpperCase();
}

function lowercase(str) {
   return test(str) && str === str.toLowerCase();
}

function begins(str, sub) {
  return Boolean(str.match(RegExp(`^${sub}`)));
}

function ends(str, sub) {
  return Boolean(str.match(RegExp(`${sub}$`)));
}

function empty(str) {
  // There can be only one.
  return str === "";
}

export {
  contains,
  caps,
  lowercase,
  begins,
  ends,
  empty
};

export default {
  contains,
  caps,
  lowercase,
  begins,
  ends,
  empty
};
