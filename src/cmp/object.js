import type from "./type.js";

var test = type.object,
    keys = Object.keys;

function size(obj, count) {
  return test(obj) && keys(obj).length === count;
}

function empty(obj) {
  return test(obj) && !keys(obj).length;
}

function contains(obj, prop) {
  return test(obj) && Boolean(obj[prop]);
}

export {
  size,
  empty,
  contains
};

export default {
  size,
  empty,
  contains
};
