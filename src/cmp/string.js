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
  // If str.indexOf(sub) is 0, bang will give true.
  return contains(str, sub) && !str.indexOf(sub);
}

function ends(str, sub) {
  return contains(str, sub) && str.indexOf(sub) === (str.length - sub.length);
}

function empty(str) {
  // If str.length is 0, bang will give true.
  return test(str) && !str.length;
}

export default {
  contains,
  caps,
  lowercase,
  begins,
  ends,
  empty
};
